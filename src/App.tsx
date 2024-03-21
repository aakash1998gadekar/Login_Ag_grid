import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login1 from './components/Login1'
import Dashboard from './components/Dashboard'
import Batch from './components/Batch.jsx'
import {LoginContextProvider} from './context/LoginContext1'
import Student from './components/Student.js'
import Inout from './components/Inout.js'

function App() {

  return (
    <>
    <LoginContextProvider>

     <Routes>

      <Route path='/batch' element={<Batch/>} />
      <Route path='/student' element={<Student/>} />
      <Route path='/inout' element={<Inout/>} />
      <Route path='/' element={<Login1/>} />
      <Route path='/home' element={<Dashboard/>} />
     </Routes>
    </LoginContextProvider>
    </>
  )
}

export default App
