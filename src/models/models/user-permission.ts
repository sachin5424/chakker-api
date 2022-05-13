import mongoose from 'mongoose'

const schema =  new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true
    },
    permissionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'permissions',
        required:true
    }
});


const userModelPermission =  mongoose.model('user_auth_permission',schema)

export default userModelPermission