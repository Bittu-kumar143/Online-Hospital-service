const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: String,
    spmessage: String,
    createdAt: { type: Date, default: Date.now }
});

const bookingModel = mongoose.model('bookings', bookingSchema);

module.exports = bookingModel;