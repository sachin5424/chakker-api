import mongoose from 'mongoose';

let schema =  new mongoose.Schema({
    title: {
        type: String
    },
    model_name: { type: String },
    method: {
        type: String
    },
});
const permissionsModel = mongoose.model('permissions', schema);

export default permissionsModel