const mongoose =require("mongoose")

const cartModel = new mongoose.Schema({
    productId:{
    	type:mongoose.Schema.Types.ObjectId,ref:"product",
        default:0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "user",
        default: 0

    },
    quantity: { type: Number,default:0},
    status: { type: Number,default:0},


}, { timestamps: true });
const cartt = mongoose.model('cart', cartModel);

module.exports=cartt