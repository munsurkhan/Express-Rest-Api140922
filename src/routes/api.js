const express = require('express');
const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");
const router = express.Router();


router.get('/hello-get', HelloController.HelloGet)
router.post('/hello-post', HelloController.HelloPost)

//Mongoose

router.post('/InsertStudent', StudentsController.InsertStudent)
router.get('/ReadStudent', StudentsController.ReadStudent)
router.post('/UpdateStudent/:id', StudentsController.UpdateStudent)

module.exports=router;