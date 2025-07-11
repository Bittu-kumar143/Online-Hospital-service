const contactUsSchema =require( "../models/contactUsModel")


const createContactUs = async (req, res) => {
    try {
        const data = await contactUsSchema.create(req.body)
        return res.json({
            success: true,
            status: 200,
            message: "Message send successfully",
            body: data
        })
    } catch (error) {
        return res.json({
            success: false,
            status: 400,
            message: error,
            body: {}
        })
    }
}

const getAllContactUs = async (req, res) => {
    try {
        const data = await contactUsSchema.find()
        return res.json({
            success: true,
            status: 200,
            message: "Here is all messages",
            body: data
        })
    } catch (error) {
        return res.json({
            success: false,
            status: 400,
            message: error,
            body: {}
        })
    }
}

const singleGetContactUs = async (req, res) => {
    try {
        const data = await contactUsSchema.findById({_id:req.params.id})
        return res.json({
            success: true,
            status: 200,
            message: "Here is single messages",
            body: data
        })
    } catch (error) {
        return res.json({
            success: false,
            status: 400,
            message: error,
            body: {}
        })
    }
}

const deleteSingleContactUs = async (req, res) => {
    try {
        const data = await contactUsSchema.findByIdAndDelete({_id:req.params.id})
        return res.json({
            success: true,
            status: 200,
            message: "Message deleted successfully",
            body: data
        })
    } catch (error) {
        return res.json({
            success: false,
            status: 400,
            message: error,
            body: {}
        })
    }
}

module.exports  ={createContactUs,getAllContactUs,singleGetContactUs,deleteSingleContactUs}