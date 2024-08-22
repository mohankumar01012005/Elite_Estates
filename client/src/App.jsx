import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import About from './Pages/About'
import SignIn from './Pages/SignIn'

import SignUp from './Pages/SignUp'
import Header from './Components/Header'

function App() {
  return (
    <div >

    <BrowserRouter>
    <Header></Header>

      <Routes>
        <Route path='/' element={<App></App>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
    
    
    
    </div>
  )
}

export default App  