import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST || "mail.privateemail.com";
const port = parseInt(process.env.SMTP_PORT || "465");
const secure = process.env.SMTP_SECURE === "true" || port === 465;
const user = process.env.SMTP_USER || "info@mrlegezt.me";
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
        Sent from <strong>info@mrlegezt.me</strong>
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
        Sent from <strong>info@mrlegezt.me</strong>
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

