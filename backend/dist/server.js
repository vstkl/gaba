"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const qr_image_1 = __importDefault(require("qr-image"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const allowedOrigins = ['http://frontend:3001'];
app.use((0, cors_1.default)({
    origin: allowedOrigins
}));
const port = 3000;
// Create MySQL connection
const db = mysql_1.default.createConnection({
    host: 'db',
    user: 'root',
    password: 'P@55word', database: 'qr_code_service',
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
// Create QR code
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
        // Generate the QR code image in memory
        const qrCodeBuffer = qr_image_1.default.imageSync(String(qrCodeId), { type: 'png' });
        // Encode the image buffer as base64
        const qrCodeImage = qrCodeBuffer.toString('base64');
        // Save the QR code details including the image in the database
        db.query('UPDATE qr_codes SET image = ? WHERE id = ?', [qrCodeImage, qrCodeId], (err) => {
            if (err) {
                console.error('Error saving QR code image:', err);
                res.status(500).json({ error: 'Failed to save QR code image' });
                return;
            }
            // Construct the URL with the base64-encoded image as a query parameter
            const imageUrl = `http://localhost:${port}/qr-code-image?image=${encodeURIComponent(qrCodeImage)}`;
            res.status(201).json({ data: { message: 'QR code created successfully', image: { imageUrl } } });
        });
    });
});
// Endpoint to retrieve the QR code image
app.get('/qr-code-image', (req, res) => {
    const { image } = req.query;
    const decodedImage = Buffer.from(String(image), 'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': decodedImage.length,
    });
    res.end(decodedImage);
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
// Serve QR code images
app.get('/qr-codes', (req, res) => {
    // Fetch all QR codes and their associated reviews
    db.query('SELECT qr_codes.id, qr_codes.location,qr_codes.image, GROUP_CONCAT(reviews.review SEPARATOR "|") AS reviews ' +
        'FROM qr_codes ' +
        'LEFT JOIN reviews ON qr_codes.id = reviews.qr_code_id ' +
        'GROUP BY qr_codes.id', (err, result) => {
        if (err) {
            console.error('Error fetching QR codes:', err);
            res.status(500).json({ error: 'Failed to fetch QR codes' });
            return;
        }
        res.status(200).json(result);
    });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
