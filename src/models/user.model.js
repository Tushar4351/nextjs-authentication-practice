import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please provide a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true,"Please provide an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true,"Please provide a password"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
    

// Next.js has a unique server-rendering model, where each request is handled by a separate instance of the server. This means that if you import the Mongoose model directly from a module, it would create a new instance of the model for each request, leading to potential issues and inefficiencies.
// To avoid this problem, Next.js recommends using a pattern where you check if the model already exists in mongoose.models. If it does, you simply reuse that instance; otherwise, you create a new instance using mongoose.model().

