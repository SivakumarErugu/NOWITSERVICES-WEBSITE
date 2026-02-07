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


export async function sendInvestorDetails(data) {
  try {
    const {
      companyName,
      entityType,
      country,
      city,
      website,

      fullName,
      email,
      role,
      phone,

      interestNature,
      primaryInterest,
      investmentSize,
      timeline,

      message,
      attachment,
    } = data;


    /* ---------- Email Body ---------- */
    const mailOptions = {
      from: `"Investor Form" <${process.env.SALES_EMAIL}>`,
      to: process.env.SALES_EMAIL,
      subject: "New Investor Form Submission",
      html: `
        <h2>Organization Details</h2>
        <p><b>Company Name:</b> ${companyName}</p>
        <p><b>Entity Type:</b> ${entityType}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Website:</b> ${website || "N/A"}</p>

        <h2>Contact Details</h2>
        <p><b>Full Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Role:</b> ${role}</p>
        <p><b>Phone:</b> ${phone}</p>

        <h2>Investment Interest</h2>
        <p><b>Nature:</b> ${interestNature}</p>
        <p><b>Primary Interest:</b> ${primaryInterest}</p>
        <p><b>Investment Size:</b> ${investmentSize}</p>
        <p><b>Timeline:</b> ${timeline}</p>

        <h2>Message</h2>
        <p>${message}</p>
      `,
      attachments: [],
    };

    /* ---------- Attachment Handling ---------- */
    if (attachment && typeof attachment === "object") {
      const buffer = Buffer.from(await attachment.arrayBuffer());

      mailOptions.attachments.push({
        filename: attachment.name,
        content: buffer,
      });
    }

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("sendInvestorDetails error:", error);
    throw error; // important: bubble up to route
  }
}

export const sendContactUsMail = async (data) => {
  try {
    const {
      name,
      email,
      country,
      preferredDate,
      message,
      fullPhone,
    } = data;

    /* ---------------- ADMIN EMAIL ---------------- */

    const adminMail = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACTUS_EMAIL,
      subject: "New Contact Us Submission",
      html: `
        <h2>New Contact Request</h2>
        <table cellpadding="6" cellspacing="0" border="0">
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Phone</b></td><td>${fullPhone}</td></tr>
          <tr><td><b>Country</b></td><td>${country}</td></tr>
          <tr><td><b>Preferred Date</b></td><td>${preferredDate}</td></tr>
          <tr><td><b>Message</b></td><td>${message}</td></tr>
        </table>
      `,
    };

    /* ---------------- USER ACK EMAIL ---------------- */

    const userMail = {
      from: `"NowIT Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting us. Our team will get back to you shortly.</p>
        <p><b>Your message:</b></p>
        <blockquote>${message}</blockquote>
        <br />
        <p>Regards,<br/>NowIT Team</p>
      `,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return { success: true };
  } catch (err) {
    console.error("sendContactUsMail error:", err);
    throw err;
  }
};