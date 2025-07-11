const bookingModel = require("../../models/bookingModel")

async function allbookings(req,res){
    try{
        console.log("user id all Users",req.userId)

        const allbookings = await bookingModel.find()
        
        res.json({
            message : "All bookings ",
            data : allbookings,
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = allbookings