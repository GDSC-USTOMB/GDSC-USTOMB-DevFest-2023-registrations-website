import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    fullname:{
        type: String
    },
    email : {
        type:String
    },
    phone :{
        type:String
    },
    univ_comp :{
        type:String
    },
    field: {
        type:String
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