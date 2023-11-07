import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import HamburguersList from './HamburguersList';
import AcompanhamentosList from './AcompanhamentosList';
import SobremesasList from './SobremesasList';
import BebidasList from './BebidasList';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HamburguersList />} />
        <Route path="/hamburguers" element={<HamburguersList />} />
        <Route path="/acompanhamentos" element={<AcompanhamentosList />} />
        <Route path="/sobremesas" element={<SobremesasList />} />
        <Route path="/bebidas" element={<BebidasList />} />
      </Routes>
    </Router>
  );
}

export default App;
