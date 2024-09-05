import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Create from './Create'
import Update from './Update'
import Read from './Read'
import Home from './Home'
import Login from './Login'
import Signin from './Signin'

const App = () => {
  return (

   <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/signin' element={<Signin/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/create' element={<Create/>}></Route>
    <Route path='/update/:id' element={<Update/>}></Route>
    <Route path='/read/:id' element={<Read/>}></Route>
   </Routes>
 
  )
}

export default App