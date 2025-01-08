const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // App password
  },
});

export default async function handler(req, res) {
  try {
    // Fetch bookings that need reminders (example logic)
    const upcomingBookings = [
      {
        customerName: "John",
        customerEmail: "john@example.com",
        tableName: "T-01",
        reservedAt: "2025-01-07 13:45",
      },
    ];

    // Send reminder emails
    for (const booking of upcomingBookings) {
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: booking.customerEmail,
        subject: "Booking Reminder",
        text: `Hello ${booking.customerName},\n\nThis is a reminder that your booking for table ${booking.tableName} is at ${booking.reservedAt}.\n\nThank you!`,
      };

      await transporter.sendMail(mailOptions);
    }

    res.status(200).json({ message: "Reminders sent successfully." });
  } catch (error) {
    console.error("Error sending reminders:", error);
    res.status(500).json({ error: "Failed to send reminders." });
  }
}
