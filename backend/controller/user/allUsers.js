const contactUsSchema = require("../../models/contactUsModel")
const orderr = require("../../models/orderModel")
const productModel = require("../../models/productModel")
const userModel = require("../../models/userModel")

async function allUsers(req,res){
    try{
        console.log("user id all Users",req.userId)

        const allUsers = await userModel.find({role:0})
        
        res.json({
            message : "All User ",
            data : allUsers,
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
async function countForDashboard(req,res){
    try {
        const userCount=await userModel.find({role:0}).countDocuments()
        const productCount=await productModel.find().countDocuments()
        const orderCount=await orderr.find().countDocuments()
        const contactUsCount=await contactUsSchema.find().countDocuments()
        return res.json({
            users:userCount,
            products:productCount,
            orders:orderCount,
            contactUs:contactUsCount,
        })

    } catch (error) {
        console.log(error)
    }
}
async function deleteSingleUser(req,res){
    try {
        await userModel.findByIdAndDelete({ _id: req.params.id })
        return res.json({
            success: true,
            status: 200,
            message: "User Deleted successfully",
            body: {}
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {allUsers,countForDashboard,deleteSingleUser}