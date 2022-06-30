import logo from './logo.svg'
import './App.css'

import Home from './pages/Home'
//import Home from './pages/test'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Up_Info from './pages/Up_Info'
import User from './pages/User'
import Detail from './pages/CommodityDetail'
import Commodity from './pages/Commodity'
import MyCommodity from './pages/MyCommodity'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
function App () {
  return (
    <BrowserRouter>
      {/* <Link to="/" className="link">HomePage</Link>
      <Link to="/profile" className="link">Profile</Link> */}
      <Routes>
        {/* <Route path='/' element={<Login />}></Route> */}
        <Route path='/' element={<Register />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/commodity/detail/:id' element={<Detail />}></Route>
        <Route path='/update' element={<Up_Info />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/detail' element={<Detail />}></Route>
        <Route path='/commodity' element={<Commodity />}></Route>
        <Route path='/mycommodity' element={<MyCommodity />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App