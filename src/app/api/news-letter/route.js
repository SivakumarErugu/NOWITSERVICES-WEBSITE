import { connectDB } from "../../../../lib/mongodb";
import Newsletter from "../../../../models/newsLetter";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json().catch(() => null);
    console.log("", body);

    if (!body || !body.email) {
      return Response.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const email = body.email.trim().toLowerCase();

    const existingSubscriber = await Newsletter.findOne({ email });

    if (existingSubscriber) {
      return Response.json(
        { success: false, message: "Email already subscribed" },
        { status: 409 }
      );
    }

    await Newsletter.create({ email });

    return Response.json(
      { success: true, message: "Subscribed successfully" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Newsletter subscription error:", error);

    return Response.json(
      { success: false, message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}