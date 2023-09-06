import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAddStudentMutation } from "../store/api/StudentsSlice";

function AddStudents() {
  const [addStuddent] = useAddStudentMutation();

  const initialValues = {
    name: "",
    school: "",
    grade: "",
    age: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is Required"),
    school: Yup.string().required("School is Required"),
    grade: Yup.string().required("Grade is Required"),
    age: Yup.string().required("Age is Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    addStuddent(values).unwrap();
    resetForm();
  };
  return (
    <div className="bg-white w-1/2 shadow rounded p-8 flex items-start justify-center flex-col">
      <h3 className="!text-left font-semibold ">Add Student</h3>
      <Formik
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
            Add Student
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddStudents;
