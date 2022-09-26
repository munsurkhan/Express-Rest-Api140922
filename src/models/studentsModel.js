const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    Name:{type:String},
    Roll: {
        type:Number,
        required:true,
        unique:true
    },
    Mobile:{
        type:String,
        validate:{
            validator:function (value) {
                return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)
            },message:"Invalid Bangladeshi Mobile Number!"
        }
    },
    Class: {type:String},
    Remarks: {type:String,default:"No Remarks"}
},{versionKey:false})

const StudentsModel = mongoose.model('students',DataSchema);
module.exports = StudentsModel;