import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";
import Settings from "./components/Settings";
import Nav from "./components/Nav";
//---------------------------------[import Routes, Route, components]

function App() {
  const [count, setCount] = useState(0);

  return <>Hello REACT</>;
}

export default App;
