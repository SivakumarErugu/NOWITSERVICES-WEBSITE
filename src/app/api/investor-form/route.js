import { sendInvestorDetails } from "../job-application/mailService";

export async function POST(request) {
    try {
        const formData = await request.formData();

        // Convert FormData → object
        const data = Object.fromEntries(formData.entries());

        await sendInvestorDetails(data);

        return Response.json(
            { success: true, message: "Application submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Investor form error:", error);

        return Response.json(
            { success: false, message: "Failed to submit application" },
            { status: 500 }
        );
    }
}