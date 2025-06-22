import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: String, require: true },
    description: { type: String, require: true },
    imageUrl: { type: String, require: true },
    option: { type: Array, default: [] },
})

const Product = mongoose.model.product || mongoose.model('product', productSchema)

export default Product