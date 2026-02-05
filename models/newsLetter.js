import mongoose, { Schema, models, model } from "mongoose";

const newsletterSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    subscribed: {
        type: Boolean,
        default: true,
    },
    unsubscribedAt: {
        type: Date,
        default: null,
    },
    lettersSent: {
        type: Number,
        default: 0,
    }

}, { timestamps: true });

const Newsletter = models.Newsletter || model("Newsletter", newsletterSchema);
export default Newsletter;