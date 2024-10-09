import { useState } from "react";
import axios from "axios";
import "./App.css";
//--//
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SignUp from "./components/Signup";
import Login from "./components/Login";
//---------------------------------[import Routes, Route, components]

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        {/* <Route path="/features" />
        <Route path="/pricing" /> */}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
