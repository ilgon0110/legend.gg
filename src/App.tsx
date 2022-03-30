import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Compared from "./Routes/Components/Comparison/Compared";
import Stats from "./Routes/Components/Stat/Stats";
import Header from "./Routes/Components/Header";

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
