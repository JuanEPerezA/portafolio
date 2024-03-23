import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import Routes from './Routes/Routes';

function App() {

  const [idioma, setIdioma] = useState(['ES'])

  return (
    <>
      <Navbar idioma={idioma} setIdioma={setIdioma}/>
      <Routes idioma={idioma} setIdioma={setIdioma}/>
    </>
  );
}

export default App;