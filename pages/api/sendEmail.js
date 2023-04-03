// pages/api/sendEmail.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  // create a nodemailer transporter with your email service credentials
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "info@sukana.net",
      pass: "hqmsnicbzrkhcphl",
    },
  });

  // create the email message
  const mailOptions = {
    from: email,
    to: "info@sukana.net",
    subject: "New message from your website",
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  // send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send message" });
  }
}
