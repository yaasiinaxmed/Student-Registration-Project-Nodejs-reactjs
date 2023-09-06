import React from "react";
import {FaUserEdit, FaUserTimes} from 'react-icons/fa'
import { useDeleteStudentMutation, useGetStudentsQuery } from "../store/api/StudentsSlice";
import { Link } from "react-router-dom";

function StudentsList() {
  const { data: students = [] } = useGetStudentsQuery();
  const [deleteStudent] = useDeleteStudentMutation();

  const handleDelete = (id) => {
    if(confirm('Are You Sure')) {
      deleteStudent(id).unwrap()
    }
  }

  return (
    <div className="mt-4 w-full">
      <table className="w-full text-lg border ">
        <thead className="bg-[#0099ff] text-xl uppercase text-white">
          <tr>
            <th scope="col" className="p-3">
              ID
            </th>
            <th scope="col" className="p-3">
              Name
            </th>
            <th scope="col" className="p-3">
              School
            </th>
            <th scope="col" className="p-3">
              Grade
            </th>
            <th scope="col" className="p-3">
              Age
            </th>
            <th scope="col" className="p-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
        {students.map((student, index) => {
          return (
            <tr key={index} className="border">
              <th scope="row" className="p-3">
                {student.id}
              </th>
              <th scope="row" className="p-3">
                {student.name}
              </th>
              <th scope="row" className="p-3">
                {student.school}
              </th>
              <th scope="row" className="p-3">
                {student.grade}
              </th>
              <th scope="row" className="p-3">
                {student.age}
              </th>
              <th scope="row" className="p-3 flex items-center justify-center gap-3">
                <Link to={`/update_student/${student.id}`} className="text-[#0099ff] cursor-pointer "><FaUserEdit/></Link>
                <span className="cursor-pointer text-red-500" onClick={() => handleDelete(student.id)}><FaUserTimes/></span>
              </th>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
