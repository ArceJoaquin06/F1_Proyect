import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Pilotos from './Pilotos';
import Campeonatos from './Campeonatos';
import Circuito from './Circuito'
import Escuderias from './Escuderia'
import Williams from './teams/Williams'
import Ferrari from './teams/Ferrari'
import AlfaRomeo from './teams/AlfaRomeo';
import RedBull from './teams/RedBull';
import AlphaTauri from './teams/AlphaTauri';
import Alpine from './teams/Alpine';
import AstonMartin from './teams/AstonMartin';
import Haas from './teams/Haas';
import McLaren from './teams/McLaren';
import Mercedes from './teams/Mercedes';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Pilotos />} />
          <Route path="championship" element={<Campeonatos />} />
          <Route path="circuits" element={<Circuito />} />
          <Route path="team" element={<Escuderias />} />
          <Route path="ferrari" element={<Ferrari />} />
          <Route path="williams" element={<Williams />} />
          <Route path="alfaromeo" element={<AlfaRomeo />} />
          <Route path="redbull" element={<RedBull />} />
          <Route path="alphatauri" element={<AlphaTauri />} />
          <Route path="alpine" element={<Alpine />} />
          <Route path="astonmartin" element={<AstonMartin />} />
          <Route path="haas" element={<Haas />} />
          <Route path="mclaren" element={<McLaren />} />
          <Route path="mercedes" element={<Mercedes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
