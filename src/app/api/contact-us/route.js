import { sendContactUsMail } from "../job-application/mailService";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),

      country: formData.get("country"),
      dialCode: formData.get("dialCode"),
      phone: formData.get("phone"),

      preferredDate: formData.get("date"),
      message: formData.get("message"),

      // Derived value (useful)
      fullPhone: `${formData.get("dialCode")} " " ${formData.get("phone")}`,
    };

    // Basic server-side validation
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.dialCode ||
      !data.message
    ) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }


    await sendContactUsMail(data);

    return Response.json(
      { success: true, message: "Contact request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { success: false, message: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}

