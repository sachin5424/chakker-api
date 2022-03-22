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

const zoneSetupModel = mongoose.model('zone_setup', schema);

export default zoneSetupModel