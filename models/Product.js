import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: String, require: true },
    description: { type: String, require: true },
    imageUrl: { type: String, require: true },
    category: { type: String, require: true },
    option: { type: Array, default: [] },
    bestseller: { type: Boolean, default: false },
})

const Product = mongoose.models.product || mongoose.model('product', productSchema)

export default Product