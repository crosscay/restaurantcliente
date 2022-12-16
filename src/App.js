import React from 'react';
import { Routes, Route } from 'react-router';
import Ordenes from './components/paginas/Ordenes'
import Menu from './components/paginas/Menu'
import NuevoPlatillo from './components/paginas/NuevoPlatillo'
import Sidebar from './components/ui/Sidebar'

function App() {
  return (
    <div>
      <Sidebar />
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
