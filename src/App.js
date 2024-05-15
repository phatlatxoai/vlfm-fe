import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import './App.css';
import { LayoutApp } from './layout/LayoutApp';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<LayoutApp/>} /> {/* 👈 Corrected */}
         {/* 👈 Corrected */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
