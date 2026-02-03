import { sendApplicationMails } from "./mailService";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),

      companyName: formData.get("companyName"),
      role: formData.get("role"),
      sysRole: formData.get("sysRole"),
      jobId: formData.get("jobId"),

      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),

      currentPackage: formData.get("currentPackage"),
      expectedPackage: formData.get("expectedPackage"),

      skills: formData.get("skills"),
      certifications: formData.get("certifications"),
      coverLetter: formData.get("coverLetter"),

      resumeFile: formData.get("resume"),
    };

    await sendApplicationMails(data);

    return Response.json(
      { success: true, message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Job application error:", error);

    return Response.json(
      { success: false, message: "Failed to submit application" },
      { status: 500 }
    );
  }
}
