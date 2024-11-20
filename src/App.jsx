import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import Navigation from './components/Navigation'
function App() {

  let todos = [{
    title:"Diska",
    completed:false
  }]

  return (
    <>
     <Navigation/>
     <h1>React Router with WEBB24</h1>
     <Routes>
        <Route path='/' element={<HomePage todos={todos}/>}/>
        <Route path="/contact" element={<ContactPage/>} />
     </Routes>

     <footer style={{height:"100px", background:"darkred"}}>
      All rights reserved @Ankademin.
     </footer>
    </>
  )
}

export default App
