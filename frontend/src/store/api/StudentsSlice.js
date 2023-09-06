import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import BASE_URL from './BASE_URL'

export const StudentsSlice = createApi({
    reducerPath: 'students',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes: ['student api'],

    endpoints: (builder) => ({

        // Get All Students - GET
        getStudents: builder.query({
            query: () => {
                return {
                 url: '/api/students',
                 methodd: 'GET', 
                }
            },
            providesTags: ['student api']
        }),

        // Add Student - POST
        addStudent: builder.mutation({
            query: (newStudent) => ({
                url: "/api/students/create_student",
                method: "POST",
                body: newStudent,
            }),
            invalidatesTags: ['student api']
        }),

        // Update Student - PUT
        updateStudent: builder.mutation({
            query: ({id, updatedStudent}) => ({
                url: `/api/students/update_student/${id}`,
                method: "PUT",
                body: updatedStudent
            }),
            invalidatesTags: ["student api"]
        }),

        // Delete Student - DELETE
        deleteStudent: builder.mutation({
            query: (id) => ({
                url: `/api/students/delete_student/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["student api"]
        })

    })
})

export const {useGetStudentsQuery, useAddStudentMutation, useUpdateStudentMutation, useDeleteStudentMutation} = StudentsSlice

export default StudentsSlice.reducer