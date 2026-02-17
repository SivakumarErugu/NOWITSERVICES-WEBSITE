"use client";

import { IoClose } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { HiPaperAirplane } from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: trimmedInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("API error");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      };

      setMessages((prev) => [...prev, assistantMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;

          const data = line.replace("data: ", "").trim();
          if (data === "[DONE]") break;

          try {
            const parsed = JSON.parse(data);

            if (parsed.content) {
              assistantMessage.content += parsed.content;

              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = { ...assistantMessage };
                return updated;
              });
            }
          } catch {}
        }
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">
      <div className="relative w-full max-w-4xl bg-gradient-to-br from-[#B7F397] to-[#7ED6A7] rounded-2xl p-2 shadow-2xl">
        <div className="w-full h-[85vh] sm:h-[80vh] bg-white rounded-xl px-4 sm:px-6 md:px-8 py-5 sm:py-6 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-[#252525]">
                NowIT AI Assistant
              </h2>
              <p className="text-xs sm:text-sm text-green-600">
                Online & Ready
              </p>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full p-1"
            >
              <IoClose size={20} />
            </button>
          </div>

          {/* Chat */}
          <div className="flex-1 mt-6 sm:mt-8 space-y-4 overflow-y-auto slot-scroll pr-1 sm:pr-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "items-start gap-3 sm:gap-4"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-b from-[#8FD37A] to-[#0B4B8A] flex items-center justify-center text-white">
                    <BsStars size={14} />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[70%] rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "border border-blue-300 text-black prose prose-sm max-w-none"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({
                          inline,
                          className,
                          children,
                          ...props
                        }) {
                          const match =
                            /language-(\w+)/.exec(className || "");
                          return !inline && match ? (
                            <SyntaxHighlighter
                              style={oneDark}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            >
                              {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                          ) : (
                            <code
                              className="bg-gray-100 px-1 py-0.5 rounded"
                              {...props}
                            >
                              {children}
                            </code>
                          );
                        },
                        a: ({ ...props }) => (
                          <a
                            {...props}
                            target="_blank"
                            className="text-blue-600 underline"
                          />
                        ),
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-b from-[#8FD37A] to-[#0B4B8A] flex items-center justify-center text-white">
                  <BsStars size={14} />
                </div>

                <div className="border border-blue-300 text-black rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 sm:gap-3 mt-4 sm:mt-6"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What are you looking for ... ?"
              disabled={isLoading}
              className="flex-1 h-11 sm:h-12 px-3 sm:px-4 rounded-lg text-black border border-blue-300 outline-none focus:ring-1 focus:ring-blue-400 text-xs sm:text-sm"
            />

            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="h-11 w-11 sm:h-12 sm:w-12 bg-gradient-to-b cursor-pointer from-[#8FD37A] to-[#0B4B8A] flex items-center justify-center text-white disabled:opacity-50 rounded-lg"
            >
              <HiPaperAirplane size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
