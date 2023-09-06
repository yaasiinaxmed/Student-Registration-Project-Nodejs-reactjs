import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useGetStudentsQuery, useUpdateStudentMutation } from '../store/api/StudentsSlice';


function UpdateStudent() {
    const navigate = useNavigate()
    const params = useParams()

    const [updatedStudent] = useUpdateStudentMutation();
    const {data: students } = useGetStudentsQuery()

    const [currentValues, setCurrentValues] = useState({})

    const initialValues = {
      name: currentValues.name,
      school: currentValues.school,
      grade: currentValues.grade,
      age: currentValues.age,
    };

    useEffect(() => {
        if(students.length > 0) {
            const student = students.find(student => student.id === params.id)
            if(student) {
                setCurrentValues(student)
            }
        }
    }, [currentValues, params.id])
  
    const validationSchema = Yup.object({
      name: Yup.string().required("Name is Required"),
      school: Yup.string().required("School is Required"),
      grade: Yup.string().required("Grade is Required"),
      age: Yup.string().required("Age is Required"),
    });
  
    const handleSubmit = (values, { resetForm }) => {
      updatedStudent({
        id: params.id,
        updatedStudent: values,
      }).unwrap().then(() => navigate('/'))
      resetForm();
    };

  return (
    <div className="z-10 bg-white w-1/2 shadow rounded p-8 flex items-start justify-center flex-col">
    <h3 className="!text-left font-semibold ">Update Student</h3>
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="mt-4 w-full flex flex-col gap-3">
        <div>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 border outline-[#0099ff] "
          />
          <ErrorMessage
            name="name"
            component="div"
            className="mt-3 text-xs text-red-500"
          />
        </div>
        <div>
          <Field
            type="text"
            name="school"
            placeholder="School"
            className="w-full p-3 border outline-[#0099ff] "
          />
          <ErrorMessage
            name="school"
            component="div"
            className="mt-3 text-xs text-red-500"
          />
        </div>
        <div>
          <Field
            type="text"
            name="grade"
            placeholder="Grade"
            className="w-full p-3 border outline-[#0099ff] "
          />
          <ErrorMessage
            name="grade"
            component="div"
            className="mt-3 text-xs text-red-500"
          />
        </div>
        <div>
          <Field
            type="text"
            name="age"
            placeholder="Age"
            className="w-full p-3 border outline-[#0099ff] "
          />
          <ErrorMessage
            name="age"
            component="div"
            className="mt-3 text-xs text-red-500"
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-[#0099ff] text-white rounded"
        >
          Update Student
        </button>
      </Form>
    </Formik>
  </div>
  )
}

export default UpdateStudent