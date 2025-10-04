

import './App.css'
import Home from './components/pages/Home'
import { Routes, Route } from "react-router";
import Login from './components/pages/Login';
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
