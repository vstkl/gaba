"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const app = (0, express_1.default)();
const port = 3000;
// Create MySQL connection
const db = mysql_1.default.createConnection({
    host: '127.0.0.1',
    user: 'sammy',
    password: 'heslo',
    database: 'qr_code_service',
    port: 3306,
});
// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Endpoint to create a QR code
app.post('/qr-codes', (req, res) => {
    const { location, stories } = req.body;
    // Save the QR code to the database (assuming you have a "qr_codes" table)
    db.query('INSERT INTO qr_codes (location) VALUES (?)', [location], (err, result) => {
        if (err) {
            console.error('Error creating QR code:', err);
            res.status(500).json({ error: 'Failed to create QR code' });
            return;
        }
        const qrCodeId = result.insertId;
        // Save the stories (assuming you have a "stories" table)
        stories.forEach((story) => {
            db.query('INSERT INTO stories (qr_code_id, story) VALUES (?, ?)', [qrCodeId, story], (err) => {
                if (err) {
                    console.error('Error creating story:', err);
                }
            });
        });
        res.status(201).json({ message: 'QR code created successfully' });
    });
});
// Endpoint to add a review to a QR code
app.post('/qr-codes/:id/reviews', (req, res) => {
    const qrCodeId = req.params.id;
    const { review } = req.body;
    // Save the review (assuming you have a "reviews" table)
    db.query('INSERT INTO reviews (qr_code_id, review) VALUES (?, ?)', [qrCodeId, review], (err) => {
        if (err) {
            console.error('Error adding review:', err);
            res.status(500).json({ error: 'Failed to add review' });
            return;
        }
        res.status(201).json({ message: 'Review added successfully' });
    });
});
// Admin-only endpoint to create a new QR code
app.post('/admin/qr-codes', (req, res) => {
    const { location } = req.body;
    // Save the QR code to the database (assuming you have a "qr_codes" table)
    db.query('INSERT INTO qr_codes (location) VALUES (?)', [location], (err) => {
        if (err) {
            console.error('Error creating QR code:', err);
            res.status(500).json({ error: 'Failed to create QR code' });
            return;
        }
        res.status(201).json({ message: 'QR code created successfully' });
    });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
