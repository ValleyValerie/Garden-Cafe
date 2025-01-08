import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import bookTable from './api/book-table.js';


dotenv.config();  // Load environment variables

const app = express();
const port = 3001;

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
app.post('/api/book-table', bookTable, async (req, res) => {
  const { tableName, reservedAt, customerName, customerSurname, customerEmail } = req.body;

  const mailOptions = {
    from: process.env.YAHOO_USER,
    to: customerEmail,
    subject: 'Booking Confirmation',
    text: `Hello ${customerName} ${customerSurname},\n\nYour table (${tableName}) has been reserved for ${reservedAt}.\n\nThank you!`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Booking confirmed and confirmation email sent.' });
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    res.status(500).json({ message: 'Failed to send confirmation email.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

