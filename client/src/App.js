import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from './components/Chat';
import Login  from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/chat" element={<Chat/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
