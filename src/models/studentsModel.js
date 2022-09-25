const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    Name:{type:String},
    Roll: {
        type:Number,
        min:[6,'Min 6 & Max 12, but Supplied Value is={VALUE}'],
        max:[12,'Min 6 & Max 12, but Supplied Value is={VALUE}'],
        required:true,
        unique:true,
    },
    Class: {type:String},
    Remarks: {type:String,default:"No Remarks"}
},{versionKey:false})

const StudentsModel = mongoose.model('students',DataSchema);
module.exports = StudentsModel;