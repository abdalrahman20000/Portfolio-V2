import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter basename="/Portfolio-V2">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
