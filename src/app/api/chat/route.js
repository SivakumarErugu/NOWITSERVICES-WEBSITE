// app/api/chat/route.js
import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export const runtime = "edge";

export async function POST(req) {
    try {
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return new Response(
                JSON.stringify({ error: "Messages array is required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const result = await streamText({
            model: google("gemini-1.5-flash"),
            messages,
            system: "You are a helpful AI assistant for NowIT Services."
        });

        return result.toDataStreamResponse();
    } catch (error) {
        console.error("API Error:", error);
        return new Response(
            JSON.stringify({ 
                error: "Failed to process request",
                message: error.message 
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}