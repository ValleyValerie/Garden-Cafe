const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Yahoo",
  auth: {
    user: process.env.YAHOO_USER,
    pass: process.env.YAHOO_APP_PASSWORD,
  },
});

export default async function handler(req, res) {
  try {
    // Replace this with a database call to fetch upcoming bookings
    const bookings = [
      {
        customerName: "John",
        customerEmail: "john@example.com",
        tableName: "T-01",
        reservedAt: "2025-01-07 13:45",
      },
    ];

    // Get the current time
    const now = new Date();

    // Filter bookings for reminders within the next 15 minutes
    const upcomingBookings = bookings.filter((booking) => {
      const reservedTime = new Date(booking.reservedAt);
      const timeDifference = reservedTime - now;
      return timeDifference > 0 && timeDifference <= 15 * 60 * 1000; // Within 15 minutes
    });

    // Send reminder emails for filtered bookings
    for (const booking of upcomingBookings) {
      const mailOptions = {
        from: process.env.YAHOO_USER,
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

