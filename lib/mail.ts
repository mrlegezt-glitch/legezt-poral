import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST || "mail.privateemail.com";
const port = parseInt(process.env.SMTP_PORT || "465");
const secure = process.env.SMTP_SECURE === "true" || port === 465;
const user = process.env.SMTP_USER || "mrlegezt@gmail.com";
const pass = process.env.SMTP_PASS;

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: {
    user,
    pass,
  },
});

export async function sendVerificationEmail(email: string, token: string, fullName: string) {
  const verifyUrl = `${process.env.NEXTAUTH_URL || "https://portal.mrlegezt.me"}/api/student/auth/verify?token=${token}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <h2 style="color: #0ea5e9; text-align: center;">Welcome to LEGEZT Portal</h2>
      <p>Hello <strong>${fullName}</strong>,</p>
      <p>Thank you for registering at the LEGEZT Portal (Lords Institute of Engineering and Technology). To activate your account, please verify your email address by clicking the link below:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${verifyUrl}" style="background-color: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Verify Email Address</a>
      </div>
      <p>If the button doesn't work, you can copy and paste the following URL into your browser:</p>
      <p style="word-break: break-all; color: #64748b;"><a href="${verifyUrl}">${verifyUrl}</a></p>
      <p style="margin-top: 30px; font-size: 0.875rem; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px;">
        If you did not register for an account, you can safely ignore this email.<br>
        Sent from <strong>mrlegezt@gmail.com</strong>
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"LEGEZT Portal" <${user}>`,
    to: email,
    subject: "Verify your email - LEGEZT Portal",
    text: `Hello ${fullName},\n\nPlease verify your email address by clicking the link below:\n\n${verifyUrl}\n\nThank you,\nLEGEZT Portal team`,
    html,
  });
}

export async function sendOtpEmail(email: string, otp: string, fullName: string) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <h2 style="color: #0ea5e9; text-align: center;">Reset Passcode - LEGEZT Portal</h2>
      <p>Hello <strong>${fullName}</strong>,</p>
      <p>You requested to reset your passcode for the LEGEZT Portal (Lords Institute of Engineering and Technology). Use the following one-time passcode (OTP) to complete the verification:</p>
      <div style="text-align: center; margin: 30px 0;">
        <span style="font-size: 32px; font-weight: bold; letter-spacing: 6px; color: #0ea5e9; background-color: #f0f9ff; padding: 10px 20px; border-radius: 6px; border: 1px dashed #0ea5e9; display: inline-block;">${otp}</span>
      </div>
      <p style="color: #ef4444; font-weight: bold; text-align: center;">This code is valid for 10 minutes only.</p>
      <p style="margin-top: 30px; font-size: 0.875rem; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px;">
        If you did not request this code, you can safely ignore this email and your password will remain unchanged.<br>
        Sent from <strong>mrlegezt@gmail.com</strong>
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"LEGEZT Portal" <${user}>`,
    to: email,
    subject: "Passcode Reset OTP - LEGEZT Portal",
    text: `Hello ${fullName},\n\nYour one-time passcode (OTP) for password reset is: ${otp}\n\nThis code is valid for 10 minutes only.\n\nThank you,\nLEGEZT Portal team`,
    html,
  });
}

export async function sendExamResultEmail(
  email: string,
  examTitle: string,
  score: number,
  maxScore: number,
  studentName: string,
  wrongAnswers: Array<{ question: string; selected: string; correct: string }>
) {
  const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  const isPass = pct >= 50;
  const statusText = isPass ? "Pass ho gaye hain!" : "Thodi aur mehnat ki zaroorat hai.";

  let wrongAnswersHtml = "";
  if (wrongAnswers.length > 0) {
    wrongAnswersHtml = `
      <h3 style="color: #ef4444; margin-top: 25px;">Incorrect Answers Analysis (Kya galtiyaan hui?):</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <thead>
          <tr style="background-color: #f8fafc; border-bottom: 2px solid #e2e8f0;">
            <th style="padding: 10px; text-align: left; font-size: 13px; color: #64748b;">Question</th>
            <th style="padding: 10px; text-align: center; font-size: 13px; color: #64748b; width: 80px;">Your Choice</th>
            <th style="padding: 10px; text-align: center; font-size: 13px; color: #64748b; width: 80px;">Correct Key</th>
          </tr>
        </thead>
        <tbody>
          ${wrongAnswers.map((wa, idx) => `
            <tr style="border-bottom: 1px solid #e2e8f0; background-color: ${idx % 2 === 0 ? "#ffffff" : "#f8fafc"};">
              <td style="padding: 12px 10px; font-size: 13px; color: #334155;">${wa.question}</td>
              <td style="padding: 12px 10px; font-size: 13px; text-align: center; color: #ef4444; font-weight: bold;">${wa.selected}</td>
              <td style="padding: 12px 10px; font-size: 13px; text-align: center; color: #10b981; font-weight: bold;">${wa.correct}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  } else {
    wrongAnswersHtml = `
      <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 15px; margin-top: 25px; text-align: center;">
        <p style="color: #16a34a; font-weight: bold; margin: 0;">🎉 Congratulations! Aapne saare answers sahi diye hain. No mistakes found!</p>
      </div>
    `;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <h2 style="color: #0ea5e9; text-align: center;">Surprise Test Result - LEGEZT Portal</h2>
      <p>Hello <strong>${studentName}</strong>,</p>
      <p>Aapke faculty ne surprise test <strong>"${examTitle}"</strong> ke results publish kar diye hain.</p>
      
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; text-align: center; margin: 25px 0;">
        <span style="font-size: 14px; text-transform: uppercase; color: #64748b; font-weight: bold; letter-spacing: 0.5px;">Your Final Score</span>
        <h1 style="font-size: 48px; color: ${isPass ? "#10b981" : "#ef4444"}; margin: 10px 0 5px 0; font-weight: 800;">${score} / ${maxScore}</h1>
        <span style="font-size: 18px; font-weight: bold; color: ${isPass ? "#10b981" : "#ef4444"};">${pct}% (${statusText})</span>
      </div>

      ${wrongAnswersHtml}

      <div style="text-align: center; margin-top: 30px;">
        <a href="${process.env.NEXTAUTH_URL || "https://portal.mrlegezt.me"}/student/results" style="background-color: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">View Detailed Performance Sheet</a>
      </div>

      <p style="margin-top: 30px; font-size: 0.875rem; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px;">
        Sent automatically from <strong>mrlegezt@gmail.com</strong>. System proctoring was active during the test.
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"LEGEZT Portal" <${user}>`,
    to: email,
    subject: `Surprise Test Result: ${examTitle} - [${score}/${maxScore}]`,
    text: `Hello ${studentName},\n\nYour result for the surprise test "${examTitle}" is out: ${score}/${maxScore} (${pct}%).\n\nPlease check the portal for a detailed performance review.\n\nThank you,\nLEGEZT Portal team`,
    html,
  });
}

export async function sendExamActiveEmail(
  email: string,
  examTitle: string,
  durationMins: number,
  studentName: string,
  facultyName: string
) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <h2 style="color: #f59e0b; text-align: center;">⚡ Alert: New Surprise Test Active!</h2>
      <p>Hello <strong>${studentName}</strong>,</p>
      <p>Aapke faculty advisor <strong>${facultyName}</strong> ne ek naya surprise test active kiya hai.</p>
      
      <div style="background-color: #fffbeb; border: 1px solid #fef3c7; border-radius: 8px; padding: 20px; text-align: center; margin: 25px 0;">
        <span style="font-size: 14px; text-transform: uppercase; color: #b45309; font-weight: bold; letter-spacing: 0.5px;">Surprise Test Details</span>
        <h2 style="color: #b45309; margin: 10px 0 5px 0; font-weight: 800;">"${examTitle}"</h2>
        <span style="font-size: 15px; font-weight: bold; color: #d97706;">Duration: ${durationMins} minutes</span>
      </div>

      <p style="color: #ef4444; font-weight: bold; text-align: center; font-size: 15px;">
        ⚠️ Warning: Please go to the student portal or open the mobile app immediately to attempt this exam before it closes.
      </p>

      <div style="text-align: center; margin-top: 30px;">
        <a href="${process.env.NEXTAUTH_URL || "https://portal.mrlegezt.me"}" style="background-color: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Login & Attempt Exam</a>
      </div>

      <p style="margin-top: 30px; font-size: 0.875rem; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px;">
        Sent automatically from <strong>mrlegezt@gmail.com</strong>.
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"LEGEZT Portal" <${user}>`,
    to: email,
    subject: `⚡ ALERT: Surprise Test Active - ${examTitle}`,
    text: `Hello ${studentName},\n\nA new surprise test "${examTitle}" is active. Duration: ${durationMins} mins. Please login immediately to attempt the test.\n\nThank you,\nLEGEZT Portal team`,
    html,
  });
}

