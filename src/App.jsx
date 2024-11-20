import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import Navigation from './components/Navigation'
import TodoDetailsPage from './pages/TodoDetailsPage'
import { useState } from 'react'
function App() {

  const [todos,setTodos] = useState([{
    title:"Diska",
    description: "Diska alla köksredskap",
    completed:false
  },{
    title:"Städa",
    description: "Städa vardagsrummet och kök",
    completed:true
  }])

  return (
    <>
     <Navigation/>
     <h1>React Router with WEBB24</h1>
     {/* Alla routes som vår applikation har */}
     <Routes>
        <Route path='/' element={<HomePage todos={todos}/>}/>
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/todo" element={<TodoDetailsPage/>} />
     </Routes>

     <footer style={{height:"100px", background:"darkred"}}>
      All rights reserved @Ankademin.
     </footer>
    </>
  )
}

export default App
