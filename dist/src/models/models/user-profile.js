"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
const userProfileModel = (0, mongoose_1.model)('user_profile', schema);
exports.userProfileModel = userProfileModel;
//# sourceMappingURL=user-profile.js.map