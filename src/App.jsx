import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Wall } from './components/Wall'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="wall" element={<Wall />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
