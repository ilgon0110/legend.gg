import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Compared from "./Routes/Compared";
import Stats from "./Routes/Stats";
import Header from "./Routes/Components/Header";
import Player1 from "./Routes/Components/Player1";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/compared/*" element={<Compared />}></Route>
        <Route path="/stats/*" element={<Stats />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
