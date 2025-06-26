import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    seat: { type: String, required: true },
    round: { type: String, required: true },
    amount: { type: Number, required: true },
    allOrder: { type: Array, required: true },
    payment: { type: Boolean, require: true, default: false }, 
    status: { type: String, require: true, default: 'Order Placed' },
    date: { type: Number, require: true }, 
})

const Order = mongoose.models.order || mongoose.model('order', orderSchema)

export default Order