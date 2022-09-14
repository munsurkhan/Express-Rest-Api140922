
exports.HelloGet = (req,res)=>{
    res.status(200).json({status:"success",data:"Hello Get with express js"})
}

exports.HelloPost = (req,res)=>{
    res.status(201).json({status:"success",data:"Hello Post"})
}

