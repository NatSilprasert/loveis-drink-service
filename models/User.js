import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    seat: { type: String, require: true},
    round: { type: String, require: true},
    cartData: { type: Array, default: [] },
    orderData: { type: Array, default: [] },
})

const User = mongoose.model.user || mongoose.model('user', userSchema)

export default User