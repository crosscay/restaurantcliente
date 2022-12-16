import React from 'react';
// import { Router } from 'react-router';
import { Routes, Route } from 'react-router';
import Ordenes from './components/paginas/Ordenes.js'
import Menu from './components/paginas/Menu.js'
import NuevoPlatillo from './components/paginas/NuevoPlatillo.js'
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Ordenes/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/nuevo-platillo" element={<NuevoPlatillo/>} />
      </Routes>
    </div>
    // <div className="App">

      /* <h1 className='text-3xl font-light'>Hola Mundo</h1> */
      
    // </div>
  );
}

export default App;
