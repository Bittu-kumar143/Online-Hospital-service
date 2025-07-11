const cartt =require("../models/cartModel")

 module.exports={
     addToCart : async (req, res) => {
        try {
            const data = await cartt.create({ ...req.body, userId: req.userId._id, status: 1 })
            return res.json({
                success: "true",
                status: 200,
                message: "Succesfully added to cart",
                body: data
            })
        } catch (error) {
            console.log(error)
        }
    },
    
      getAllCart : async (req, res) => {
        try {
            const data = await cartt.find({ userId: req.userId._id }).populate("productId").populate("userId")
            return res.json({
                success: "true",
                status: 200,
                message: "Here is all items",
                body: data
            })
        } catch (error) {
            console.log(error)
        }
    },
      updateStatusInCart : async (req, res) => {
        try {
            const data = await cartt.updateMany({ userId: req.userId._id, status: 0 })
            return res.json({
                success: "true",
                status: 200,
                message: "status Updated",
                body: data
            })
        } catch (error) {
            console.log(error)
        }
    },
    
      deleteCart : async (req, res) => {
        try {
            const data = await cartt.deleteMany({ userId: req.userId._id })
            return res.json({
                success: "true",
                status: 200,
                message: "Item deleted",
                body: {}
            })
        } catch (error) {
            console.log(error)
        }
    },
      deleteSingleCartItem : async (req, res) => {
        try {
            const data = await cartt.deleteOne({ _id: req.params.id })
            return res.json({
                success: "true",
                status: 200,
                message: "Item deleted",
                body: {}
            })
        } catch (error) {
            console.log(error)
        }
    },
      updateCart : async (req, res) => {
        try {
            const data = await cartt.findByIdAndUpdate({ _id: req.params.id },
                { quantity: req.body.quantity },
                { raw: true })
            return res.json({
                success: "true",
                status: 200,
                message: "Items updated",
                body: data
            })
        } catch (error) {
            console.log(error)
        }
    }
 }