import { nanoid } from 'nanoid'

function getId() {
  return nanoid().slice(0, 5)
}

let students = [
  { id: getId(), name: 'Mohamed Ali', school: "University of Mogadishu", grade: "A", age: "20" },
  { id: getId(), name: 'Abdirahman Ahmed', school: "University of Hargeisa", grade: "B", age: "22" },
  { id: getId(), name: 'Fartun Yusuf', school: "University of Kismayo", grade: "A", age: "25" },
  { id: getId(), name: 'Yaasiin Ahmed', school: "University of Banaadir", grade: "D", age: "23" },
  { id: getId(), name: 'Qaali Mohamed', school: "University of Bosaaso", grade: "C", age: "25" },

]

export async function findAll() {
    // SELECT * FROM students;
    return students
}
export async function findById(id) {
    // SELECT * FROM students WHERE id = 1;
    const student = students.find(s => s.id === id)
    return student
}
export async function add_student({ name, school, grade, age }) {
    // INSERT INTO students (id, name, school, grade, age) VALUES ('xyz', 'Foo', 10);
    const newStudent = { id: getId(), name, school, grade, age }
    students.push(newStudent)
    return newStudent
}
export async function updateStudent(id, changes) {
    // UPDATE students SET name = 'Foo', weight = 9 WHERE id = 1;
    const student = students.find(student => student.id === id)
    if (!student) return null

    const updatedStudent = { ...changes, id }
    students = students.map(s => (s.id === id) ? updatedStudent : s)
    return updatedStudent
}
export async function deleteStudent(id) {
    // DELETE FROM students WHERE id = 1;
    const student = students.find(student => student.id === id)
    if (!student) return null

    students = students.filter(s => s.id !== id)
    return student
}