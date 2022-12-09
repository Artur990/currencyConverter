import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar";
import Content from "./components/Content";
import { History } from "./components/History";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>
    </div>
  );
}

export default App;
