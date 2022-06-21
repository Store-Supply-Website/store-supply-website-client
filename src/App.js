import logo from './logo.svg'
import './App.css'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Detail from './pages/CommodityDetail'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
function App () {
  return (
    <BrowserRouter>
      {/* <Link to="/" className="link">HomePage</Link>
      <Link to="/profile" className="link">Profile</Link> */}
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/detail' element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
