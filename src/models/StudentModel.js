const { strictEqual } = require('assert')
const mongoose=require('mongoose')
const { stringify } = require('querystring')
var studentSchema=new mongoose.Schema({
    rollno:{
        type:Number,
        required:true
        
    },
    name:{
        type:String,
        required:true
        
    },
    address:{
        type:String      
    },

});
const Students= new mongoose.model("Student",studentSchema)
module.exports=Students;