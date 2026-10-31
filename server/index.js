
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  try {
    await transporter.sendMail({
  from: {
    name: "Hire Via HR - Website Enquiry",
    address: process.env.EMAIL_USER
  },
  to: process.env.CLIENT_EMAIL,
  replyTo: email,
  subject: "New Contact Enquiry - Hire Via HR",
  text: `
New Website Enquiry

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
  `
});

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
