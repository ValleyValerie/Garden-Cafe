import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors

dotenv.config();  // Load environment variables

const app = express();
const port = 3000;

// Apply the cors middleware after app initialization
app.use(cors()); // This will allow all domains to make requests

// Parse JSON request body
app.use(express.json());

// GET route for root (optional, for the preview page)
app.get('/', (req, res) => {
  res.send('Server is running! Send a POST request to /api/book-table.');
});

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Yahoo',
  auth: {
    user: process.env.YAHOO_USER,
    pass: process.env.YAHOO_APP_PASSWORD,
  },
});

// POST route to send confirmation email
app.post('/api/book-table', (req, res) => {
  const { tableName, reservedAt, customerName, customerSurname, customerEmail } = req.body;

  // Check for missing fields
  if (!tableName || !reservedAt || !customerName || !customerSurname || !customerEmail) {
    return res.status(400).send('All fields are required.');
  }

  const mailOptions = {
    from: process.env.YAHOO_USER,
    to: customerEmail,
    subject: 'Booking Confirmation',
    text: `Hello ${customerName} ${customerSurname},\n\nYour table (${tableName}) has been reserved for ${reservedAt}.\n\nThank you!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending confirmation email.');
    }
    res.status(200).send('Booking confirmed and confirmation email sent.');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
