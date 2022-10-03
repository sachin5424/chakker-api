import mongoose from 'mongoose';


const schema: any = new mongoose.Schema({
    nextDate: {
        type: String,
    },
    doneBy: {
        type: String,
    },
    remark:{
        type: String,
    },
    alert:{
        type: String,
    },
    deviceId: {
        type: String,
        required:true,
    },

});

const Drvice_Maintenance = mongoose.model('Drvice_Maintenance', schema);

export default Drvice_Maintenance