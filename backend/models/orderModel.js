const mongoose =require( "mongoose")

const orderModel = new mongoose.Schema({
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    address: { type: String, default: "" },
    quantity: { type: Number, default: 0 },
    phone: { type: Number, default: 0 },
    orderId: { type: String, default: "" },
    products: [{ 
         productId:{
    	type:mongoose.Schema.Types.ObjectId,ref:"product",
        default:""
    },
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "user",
        default: ""

    },
    totalAmount: { type: Number, default: 0 },
    status: { type: Number, enum: [0, 1], default: 0 }, //0-default,1-ok

}, { timestamps: true });
const orderr = mongoose.model('order', orderModel);

module.exports= orderr