const mongoose =require( "mongoose")

const productSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    image: { type: String, default: "" },
    description: { type: String, default: "" },
    sellingPrice: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
}, { timestamps: true });

const productModel = mongoose.model("product", productSchema);
module.exports= productModel;
