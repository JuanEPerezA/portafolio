import React, {useContext, useState} from 'react';
import Navbar from './Components/Navbar';
import Routes from './Routes/Routes';
import { LanguageContext } from './Config/LanguageProvider';

function App() {

  const { idioma, setIdioma } = useContext(LanguageContext); // Obtén el estado y la función de cambio de idioma del contexto

  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
}

export default App;