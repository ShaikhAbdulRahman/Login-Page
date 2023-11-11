import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Forget from '../pages/Forget/Forget'

const RoutePages = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/forget' element={<Forget/>} />
    </Routes>
  )
}

export default RoutePages