import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Register from "./pages/Register/register.jsx"
import Login from "./pages/Login/login.jsx"
import ListUsers from "./pages/List/list.jsx"

function App() {


  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list-users" element={<ListUsers />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
