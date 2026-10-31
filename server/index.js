import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "https://hireviahr.in",
  "https://www.hireviahr.in",
  process.env.FRONTEND_URL,
].filter(Boolean);

// Middleware
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hire Via HR backend is running!",
  });
});

// Contact form API
app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message } = req.body;

    const missingEmailSettings = ["EMAIL_USER", "EMAIL_PASS", "CLIENT_EMAIL"].filter(
      (key) => !process.env[key]?.trim()
    );
    if (missingEmailSettings.length > 0) {
      console.error(
        `Contact email configuration is missing: ${missingEmailSettings.join(", ")}`
      );
      return res.status(503).json({
        message: "The contact form is not configured yet. Please call +91 9220762559.",
      });
    }

    // Validate required fields
    if (!firstName || !email || !message) {
      return res.status(400).json({
        message: "Please fill in all required fields.",
      });
    }

    // Send email
    await transporter.sendMail({
      from: {
        name: "Hire Via HR - Website Enquiry",
        address: process.env.EMAIL_USER,
      },
      to: process.env.CLIENT_EMAIL,
      replyTo: email,
      subject: `New Contact Enquiry - ${subject || "General Inquiry"}`,
      text: `
New Website Enquiry

Name: ${firstName} ${lastName || ""}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject || "Not specified"}

Message:
${message}
      `,
    });

    return res.status(200).json({
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Email sending failed:", error);

    return res.status(500).json({
      message: "Unable to send your message. Please try again later.",
    });
  }
});

// Render-compatible port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Hire Via HR backend running on port ${PORT}`);
});
