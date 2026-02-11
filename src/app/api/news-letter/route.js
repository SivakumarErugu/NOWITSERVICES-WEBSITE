import { connectDB } from "../../../../lib/mongodb"; 
import Newsletter from "../../../../models/newsLetter";

export async function POST(request) {
  try {
    // DB connection
    await connectDB();

    // Parse request body
    const { email } = await request.json();
    console.log(email)

    if (!email) {
      return Response.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Check existing subscriber
    const existingSubscriber = await Newsletter.findOne({ email });

    if (existingSubscriber) {
      return Response.json(
        { success: false, message: "Email already subscribed" },
        { status: 409 }
      );
    }

    // Create subscriber
    await Newsletter.create({ email });

    return Response.json(
      { success: true, message: "Subscribed successfully" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Newsletter subscription error:", error);

    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
