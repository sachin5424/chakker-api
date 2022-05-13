import { Schema, model } from 'mongoose';

const schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
    },
    companyName: { type: String },
    application: { type: String },
    status: { type: String, enum: ['active', 'deactive', 'pending'] },
});


const userProfileModel = model('user_profile',schema);

export {
    userProfileModel
}