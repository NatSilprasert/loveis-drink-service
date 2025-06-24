import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    category: { type: String, required: true },
    option: { type: Array, default: [] },
    bestseller: { type: Boolean, default: false },
    signature: { type: Boolean, default: false },
})

const Product = mongoose.models.product || mongoose.model('product', productSchema)

export default Product