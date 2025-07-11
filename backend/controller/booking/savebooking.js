const bookingModel = require("../../models/bookingModel");
const userModel = require("../../models/userModel");

const savebooking = async (req, res) => {
    try {
        const currentUser = req.userId;
        console.log("currentUser", currentUser);
        
        // Fetch the user data from userModel
        const user = await userModel.findById(currentUser);
        if (!user) {
            return res.status(404).json({ success: false, error: true, message: "User not found" });
        }

        // Create booking data with user information
        const bookingData = {
            ...req.body,
            userId: currentUser,
            name: user.name,
            email: user.email
        };

        const uploadBooking = new bookingModel(bookingData);
        const saveBook = await uploadBooking.save();

        res.status(201).json({
            message: "Booking information has been forwarded successfully",
            error: false,
            success: true,
            data: saveBook
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
};

module.exports = savebooking;
