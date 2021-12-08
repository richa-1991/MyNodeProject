const Students=require("../models/StudentModel")




module.exports.homepage=async(req,res)=>{
    try{
        const getStudents=await Students.find({})
        res.status(201).send(getStudents)
    }catch(e){
        res.status(400).send(e)
    }
}

module.exports.getStudentById=async(req,res)=>{
    try{

        const getStudent=await Students.findById(req.params.id)
        res.status(201).send(getStudent)
    }catch(e){
        res.status(400).send(e)
    }
}

module.exports.addStudent=async (req,res)=>{

    try{
        const addStudentRecords=new Students(req.body)
        console.log(req.body)
        const insertStu= await addStudentRecords.save()
        res.send(insertStu)
    }
    catch(e){
        res.send(e)
    }
}

module.exports.updateStudent=async(req,res)=>{
    try{

        const getStudent=await Students.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).send(getStudent)
    }catch(e){
        res.status(400).send(e)
    }
}

module.exports.deleteStudent=async(req,res)=>{
    try{

        const delkStudent=await Students.findByIdAndDelete(req.params.id)
        res.status(200).send(delStudent)
    }catch(e){
        res.status(400).send(e)
    }
}
