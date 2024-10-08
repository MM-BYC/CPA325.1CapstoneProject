import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
//--//
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Event from "./components/Event";
import Pricing from "./components/Pricing";

//---------------------------------[import Routes, Route, components]

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/Login" replace />} />
        {/*Use Navigate to default the SignUp page*/}
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
