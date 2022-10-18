import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Goals from './pages/goals/Goals'
import Navbar from './components/Navbar'
import Todo from './pages/Tasks/Todo'
import Home from './pages/Home '


/*

  <Route path="/messages" element={<Messages />} />

*/


function App (){
  return (
    <div>
        <Router>
          <Navbar />
          
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App