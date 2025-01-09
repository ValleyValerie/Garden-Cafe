const nodemailer = require('nodemailer')

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Yahoo',
  auth: {
    user: process.env.YAHOO_USER,
    pass: process.env.YAHOO_APP_PASSWORD,
  },
})
export default async function handler(req, res) {
  console.log("Received request:", req.body);  // Add logging here
  if (req.method === "POST") {
    const { tableName, reservedAt, customerName, customerSurname, customerEmail } = req.body;

    // Log the incoming data
    console.log("Booking details:", { tableName, reservedAt, customerName, customerSurname, customerEmail });

    const mailOptions = {
      from: process.env.YAHOO_USER,
      to: customerEmail,
      subject: "Booking Confirmation",
      text: `Hello ${customerName} ${customerSurname},\n\nYour table (${tableName}) has been reserved for ${reservedAt}.\n\nThank you!`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Booking confirmed and confirmation email sent." });
    } catch (error) {
      console.error("Error sending confirmation email:", error.message);
      res.status(500).json({ message: "Failed to send confirmation email.", error: error.message });
    }
  } else {
    console.log("Method not allowed:", req.method);  // Log method if it's not POST
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
