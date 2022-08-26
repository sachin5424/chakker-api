"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOtp = void 0;
const generateOtp = (value) => {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    if (OTP == value) {
        generateOtp(OTP);
    }
    else {
        return OTP;
    }
};
exports.generateOtp = generateOtp;
//# sourceMappingURL=_helper.js.map