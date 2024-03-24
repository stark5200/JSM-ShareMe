import React from 'react'
import { Routes, Route } from "react-router-dom"; // useNavigate
import Login from './components/Login';
import Home from './container/Home';

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default App