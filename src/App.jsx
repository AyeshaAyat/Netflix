

import './App.css'
import Home from './components/pages/Home'
import { Routes, Route } from "react-router";
import Login from './components/pages/Login';
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
