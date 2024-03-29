import { useState, useRef } from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Welcome from './page/Welcome';
import './scss/Style.scss';
import Header from './page/Header';
import Trailer from './page/Trailer';
import Mycontext from './Mycontext';

function App() {
  return (
    <BrowserRouter>
      <Mycontext>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/welcome" element={<Welcome />}></Route>
            <Route path="/trailer" element={<Trailer />}></Route>
          </Routes>
        </main>
      </Mycontext>
    </BrowserRouter>
  );
}

export default App;
