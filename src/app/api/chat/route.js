import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { systemPrompt } from "../../../../constant/prompt";

export const runtime = "edge";

const model = new ChatGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
  model: "gemini-2.5-flash-lite",
  temperature: 0.7,
  streaming: true,
  verbose: false,
  onFailedAttempt: (err) => console.log(err),
});

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        { status: 400 }
      );
    }

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          const responseStream = await model.stream([
            {
              role: "system",
              content: systemPrompt,
            },
            ...messages,
          ]);

          for await (const chunk of responseStream) {
            const text = chunk.content || "";

            controller.enqueue(
              encoder.encode(
                `data: ${JSON.stringify({ content: text })}\n\n`
              )
            );
          }

          controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
          controller.close();
        } catch (err) {
          console.error(err);
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to process request",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
