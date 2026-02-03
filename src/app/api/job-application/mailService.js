import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


/* -------------------- SEND MAILS -------------------- */
export async function sendApplicationMails(data) {
  const {
    firstName,
    lastName,
    email,
    phone,

    companyName,
    role,
    sysRole,
    jobId,

    startDate,
    endDate,

    currentPackage,
    expectedPackage,

    skills,
    certifications,
    coverLetter,
    resumeFile,
  } = data;

  /* ---------------- HR MAIL ---------------- */
  const attachments = [];

  if (resumeFile) {
    const buffer = Buffer.from(await resumeFile.arrayBuffer());
    attachments.push({
      filename: resumeFile.name,
      content: buffer,
    });
  }

  await transporter.sendMail({
    from: `"Career Portal" <${process.env.EMAIL_USER}>`,
    to: process.env.HR_EMAIL,
    subject: `New Job Application – ${firstName} ${lastName}`,
    html: `
      <h2>New Job Application</h2>

      <p><strong>Job ID:</strong> ${jobId}</p>
      <p><strong>System Role:</strong> ${sysRole}</p>

      <hr/>

      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>

      <hr/>

      <p><strong>Company:</strong> ${companyName}</p>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Start Date:</strong> ${startDate}</p>
      <p><strong>End Date:</strong> ${endDate || "N/A"}</p>

      <hr/>

      <p><strong>Current Package:</strong> ${currentPackage}</p>
      <p><strong>Expected Package:</strong> ${expectedPackage}</p>

      <hr/>

      <p><strong>Skills:</strong> ${skills}</p>
      <p><strong>Certifications:</strong> ${certifications || "N/A"}</p>

      <hr/>

      <p><strong>Cover Letter:</strong></p>
      <p>${coverLetter}</p>
    `,
    attachments,
  });

  /* ---------------- AUTO-REPLY ---------------- */
  await transporter.sendMail({
    from: `"NOWIT Careers" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "We received your application ✔",
    html: `
      <p>Dear ${firstName},</p>

      <p>
        Thank you for applying at <strong>NOWIT</strong>.
        We have successfully received your application for the
        <strong>${sysRole}</strong> position.
      </p>

      <p>
      <strong>Job ID:</strong> ${jobId}
      </p>

      <p>
        Our recruitment team is currently reviewing applications.
        If your profile matches our requirements, we will contact you
        for the next steps.
      </p>

      <p>
        Please note that due to the high volume of applications,
        only shortlisted candidates will be contacted.
      </p>

      <br/>

      <p>
        Best regards,<br/>
        <strong>NOWIT Recruitment Team</strong>
      </p>

      <hr/>
      <small>This is an automated email. Please do not reply.</small>
    `,
  });
}
