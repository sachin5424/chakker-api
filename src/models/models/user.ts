import mongoose  from 'mongoose';


const schema:any = new mongoose.Schema({
    username:{
        type: String,
    },
    firstName:{
        type: String,
    },
    lastName:{type:String},
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    mobileNumber:{type:String},
    gender:{type:String,enum:['male','female','other']},
    isEmailverified:{type:Boolean, default:false},
    emailOtp:{type:Number},
    userTpe:{type:String,default:"user"},
    joinDate:{type:Date,default:Date.now()},
    lastLogin:{type:Date,default:Date.now()},
    isActive:{type:Number,default:1},


});


const userModel = mongoose.model('user',schema);

export default userModel