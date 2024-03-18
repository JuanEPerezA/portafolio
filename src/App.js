import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {

  const [idioma, setIdioma] = useState(['ES'])

  return (
    <>
        <Navbar idioma={idioma} setIdioma={setIdioma}/>
        {/* <Home idioma={idioma} setIdioma={setIdioma}/> */}
      {/* <Footer idioma={idioma} setIdioma={setIdioma}/> */}
    </>
  );
}

export default App;