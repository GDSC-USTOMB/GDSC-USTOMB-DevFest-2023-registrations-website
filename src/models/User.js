import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email : {
        type:String,
        required: true
    },
    phone :{
        type:String,
        required: true
    },
    univ_comp :{
        type:String,
    },
    field: {
        type:String,
    },
    position:{
        type:String
    },
    questions: {
        type:String
    }

})
mongoose.models = {}
module.exports = mongoose.model('Registrations', registerSchema )