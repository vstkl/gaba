import express, { Request, Response } from 'express';
import mysql from 'mysql';
import qrcode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
require('dotenv').config();

const app = express();
const port = process.env.BACKEND_PORT || 3000;

// Create MySQL connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'sammy',
  password: 'heslo',
  database: 'qr_code_service',
  port: 3306,
});

// Connect to MySQL
db.connect((err: any) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to create a QR code
app.post('/qr-codes', async (req: Request, res: Response) => {
  const { location, stories } = req.body;
  // Save the QR code to the database (assuming you have a "qr_codes" table)
  db.query('INSERT INTO qr_codes (location) VALUES (?)', [location], async (err: any, result: any) => {
    if (err) {
      console.error('Error creating QR code:', err);
      res.status(500).json({ error: 'Failed to create QR code' });
      return;
    }
    const qrCodeId = result.insertId;
    // Save the stories (assuming you have a "stories" table)
    for (const story of stories) {
      db.query('INSERT INTO stories (qr_code_id, story) VALUES (?, ?)', [qrCodeId, story], (err: any) => {
        if (err) {
          console.error('Error creating story:', err);
        }
      });
    }
    // Generate QR code image
    const qrCodeImagePath = path.join(__dirname, 'qrcodes', `${qrCodeId}.png`);
    await promisify(qrcode.toFile)(qrCodeImagePath, String(qrCodeId));
    res.status(201).json({ message: 'QR code created successfully' });
  });
});

// Endpoint to add a review to a QR code
app.post('/qr-codes/:id/reviews', (req: Request, res: Response) => {
  const qrCodeId = req.params.id;
  const { review } = req.body;
  // Save the review (assuming you have a "reviews" table)
  db.query('INSERT INTO reviews (qr_code_id, review) VALUES (?, ?)', [qrCodeId, review], (err: any) => {
    if (err) {
      console.error('Error adding review:', err);
      res.status(500).json({ error: 'Failed to add review' });
      return;
    }
    res.status(201).json({ message: 'Review added successfully' });
  });
});

// Admin-only endpoint to create a new QR code
app.post('/admin/qr-codes', (req: Request, res: Response) => {
  const { location } = req.body;
  // Save the QR code to the database (assuming you have a "qr_codes" table)
  db.query('INSERT INTO qr_codes (location) VALUES (?)', [location], (err: any) => {
    if (err) {
      console.error('Error creating QR code:', err);
      res.status(500).json({ error: 'Failed to create QR code' });
      return;
    }
    res.status(201).json({ message: 'QR code created successfully' });
  });
});

// Serve QR code images
app.use('/qrcodes', express.static(path.join(__dirname, 'qrcodes')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
