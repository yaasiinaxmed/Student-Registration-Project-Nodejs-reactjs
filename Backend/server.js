import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {add_student, deleteStudent, findAll, findById, updateStudent} from './student_model.js'

const server = express();

server.use(cors())
server.use(bodyParser.json())

// Get All Students - GET
server.get('/api/students', async (req, res) => {
    const allStudents = await findAll();
    res.json(allStudents);
})

// Get student by id - GET
server.get('/api/students/:id', async (req, res) => {
    const student = await findById(req.params.id);
    if(student) {
        res.json(student)
    } else {
        res.status(404).json({status: 404, message: "Student not found"})
    }
})

// Create student - POST
server.post('/api/students/create_student', async (req, res) => {
    const newStudent = await add_student(req.body);
    if(newStudent) {
        res.json(newStudent)
    } else {
        res.status(400).json({status: 400, message: "Student was not created"})
    }
})

// Update Student - PUT
server.put('/api/students/update_student/:id', async (req, res) => {
    const updatedStudent = await updateStudent(req.params.id, req.body);
    if(updatedStudent) {
        res.json(updatedStudent)
    } else {
        res.status(400).json({status: 400, message: "Student was not updated"})
    }
})

// Delete Student - DELETE
server.delete('/api/students/delete_student/:id', async (req, res) => {
    const deletedStudent = await deleteStudent(req.params.id);
    if(deletedStudent) {
        res.json({message: `student deleted id ${req.params.id} successFully`})
    } else {
        res.status(400).json({status: 400, message: "Student was not deleted"})
    }
})

server.listen((3000), () => console.log("Server is runing.... http://localhost:3000") )