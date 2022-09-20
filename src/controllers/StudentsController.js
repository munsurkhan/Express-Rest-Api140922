const StudentsModel = require('../models/studentsModel')

//CRUD Operation
//create
exports.InsertStudent=(req,res)=>{
    let reqBody = req.body;

    StudentsModel.create(reqBody, (err,data)=>{
        if (err){
            res.status(400).json({status:"Fail",data:err})
        }else{
            res.status(201).json({status:"Data Insert Success",data:data})
        }
    })
}

//Read
exports.ReadStudent = (req,res)=>{
    let Query = {};
    let Projection = "Name Roll Class Remarks";
    StudentsModel.find(Query,Projection, (err,data)=>{
        if (err){
            res.status(400).json({status:"Data Read Fail",data:err})
        }else{
            res.status(201).json({status:"Data Read Success",data:data})
        }
    })
}

//Update
exports.UpdateStudent=(req,res)=>{
    let id = req.params.id;
    let QUERY = {_id:id}
    let reqBody = req.body;

    StudentsModel.updateOne(QUERY,reqBody,(err,data)=>{
        if (err){
            res.status(400).json({status:"Data Update Fail",data:err})
        }else{
            res.status(201).json({status:"Data Update Success",data:data})
        }
    })
}