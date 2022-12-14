import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Container>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </Container>
    </>
  );
}

export default App;
