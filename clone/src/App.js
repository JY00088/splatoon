import { useState, useRef } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './page/Home';
import './scss/Style.scss'
import Header from "./page/Header";

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;
