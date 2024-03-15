import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  const [idioma, setIdioma] = useState(['ES'])

  return (
    <>
      <Navbar idioma={idioma} setIdioma={setIdioma} />
      <Footer/>
    </>
  );
}

export default App;