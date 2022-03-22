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
    isEmailverified:{type:Boolean, default:false},
    userTpe:{type:String,default:"admin"},
    joinDate:{type:Date,default:Date.now()},
    lastLogin:{type:Date,default:Date.now()},

});


const userModel = mongoose.model('user',schema);

export default userModel