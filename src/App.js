import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import Routes from './Routes/Routes';

function App() {
  const storedLanguage = localStorage.getItem("idiomaNuevo") !== null && localStorage.getItem("idiomaNuevo") !== 'undefined' ? localStorage.getItem("idiomaNuevo") : 'ES';
  const [idioma, setIdioma] = useState(storedLanguage);

  return (
    <>
      <Navbar idioma={idioma} setIdioma={setIdioma}/>
      <Routes idioma={idioma} setIdioma={setIdioma}/>
    </>
  );
}

export default App;