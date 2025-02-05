import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "../src/AuthContext";
import PrivateRoute from "../src/PrivateRoute";
import Dashboard from "../src/Dashboard.jsx";
import Login from "../src/Login.jsx";
import Counter from "../src/Counter.js";
import UserDataForm from '../src/UserDataForm.js';
import RichTextEditor from '../src/RichTextEditor.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Assignment</h1>
      </header>

      <Counter />
      <UserDataForm />
      <RichTextEditor />

      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
