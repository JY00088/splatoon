import { useState, useRef } from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import './scss/Style.scss';
import Header from './page/Header';
import Trailer from './page/Trailer';
import MainBox from './page/MainBox';
import Mycontext from './Mycontext';

function App() {
  return (
    <BrowserRouter>
      <Mycontext>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/trailer" element={<Trailer />}></Route>
            <Route path="/mainbox" element={<MainBox />}></Route>
          </Routes>
        </main>
      </Mycontext>
    </BrowserRouter>
  );
}

export default App;
