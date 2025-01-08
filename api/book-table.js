const nodemailer = require("nodemailer");

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Yahoo",
  auth: {
    user: process.env.YAHOO_USER, 
    pass: process.env.YAHOO_APP_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { tableName, reservedAt, customerName, customerSurname, customerEmail } = req.body;

    // Send confirmation email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: customerEmail,
      subject: "Booking Confirmation",
      text: `Hello ${customerName} ${customerSurname},\n\nYour table (${tableName}) has been reserved for ${reservedAt}.\n\nThank you!`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Booking confirmed and confirmation email sent." });

      // Reminder emails are more challenging in serverless environments like Vercel
      // Use a third-party cron service like Upstash (for scheduled jobs) or Vercel Cron Jobs
    } catch (error) {
      console.error("Error sending confirmation email:", error);
      res.status(500).json({ message: "Failed to send confirmation email." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }


}
