const productModel = require("../models/productModel")

module.exports={
     productCreate : async (req, res) => {
        try {
           
            const data = await productModel.create({ ...req.body,  })
            return res.json({
                success: true,
                status: 200,
                message: "Product created successfully",
                body: data
            })
        } catch (error) {
            console.log(error, "error")
            return res.json({
                success: false,
                status: 400,
                message: error,
                body: {}
            })
        }
    },
     productGet : async (req, res) => {
        try {
            const data = await productModel.find().sort({_id:-1})
            const result=data?.map((e)=>({
                ...e?.toObject()
            }))
            return res.json({
                success: true,
                status: 200,
                message: "Here is all products",
                body: result
            })
        } catch (error) {
            return res.json({
                success: false,
                status: 400,
                message: error,
                body: {}
            })
        }
    },
     productGetSingle : async (req, res) => {
        try {
            const data = await productModel.findById({ _id: req.params.id })
            return res.json({
                success: true,
                status: 200,
                message: "Here is single products",
                body: {...data.toObject()
                }
            })
        } catch (error) {
            console.log(error)
            return res.json({
                success: false,
                status: 400,
                message: error,
                body: {}
            })
        }
    },
     productUpdateGetSingle : async (req, res) => {
        try {
           
            const data = await productModel.findByIdAndUpdate({ _id: req.params.id },
                { ...req.body,  },{new:true})
            return res.json({
                success: true,
                status: 200,
                message: "Product get updated",
                body: data
            })
        } catch (error) {
            console.log(error)
            return res.json({
                success: false,
                status: 400,
                message: error,
                body: {}
            })
        }
    },
     productDeleteSingle : async (req, res) => {
        try {
            const data = await productModel.findByIdAndDelete({ _id: req.params.id })
            return res.json({
                success: true,
                status: 200,
                message: "Product is deleted",
                body: {}
            })
        } catch (error) {
            console.log(error)
            return res.json({
                success: false,
                status: 400,
                message: error,
                body: {}
            })
        }
    }

}


