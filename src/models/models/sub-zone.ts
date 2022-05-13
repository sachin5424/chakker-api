import mongoose from 'mongoose';


const schema: any = new mongoose.Schema({
    zoneName: {
        type: String,
        required:true,
    },
    location: {
        type: {
            type: String,
            default:"Point"
        },
        coordinates: Array
    },
    status:{
        type:Boolean,
        default:true
    },
    serverTime:{
        type: Date,
        default:new Date
    },
    UID: {
        type: Number
    },
    

});

const subZoneModel = mongoose.model('sub_zone', schema);

export default subZoneModel