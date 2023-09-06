import StudentsList from './components/StudentsList';
import AddStudents from './components/AddStudents';
import {useLocation, Routes, Route} from 'react-router-dom'
import UpdateStudent from './components/UpdateStudent';

function App() {
  const location = useLocation();

  return (
    <div className='flex items-center flex-col p-4 gap-4'>
      <h1 className="text-2xl text-[#0099ff] font-bold">Student Registration</h1>
      {location.pathname === '/' ? (
        <AddStudents/>
      ) : (
        <Routes>
          <Route path="/update_student/:id" element={<UpdateStudent/>}/>
        </Routes>
      )}
      <StudentsList/>
    </div>
  )
}

export default App
