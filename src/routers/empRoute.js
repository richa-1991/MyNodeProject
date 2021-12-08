const express=require('express');

const router=express.Router();
const empStuCtr=require('../controllers/studentController')



router.get('/',empStuCtr.homepage)
router.get('/:id',empStuCtr.getStudentById)
router.post('/addStudent',empStuCtr.addStudent)
router.put('/:id',empStuCtr.updateStudent)
router.delete('/:id',empStuCtr.deleteStudent)



module.exports=router;