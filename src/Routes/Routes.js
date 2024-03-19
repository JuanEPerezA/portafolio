import React, { useState } from 'react';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { BrowserRouter, Routes as Switch, Route} from 'react-router-dom';
import Home from './../Pages/Home';
import About from './../Pages/About';
import Contacto from './../Pages/Contacto';

function Routes() {
  const [idioma, setIdioma] = useState(['ES'])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' element={<Home idioma={idioma} setIdioma={setIdioma}/>}/>
        <Route exact path="/Home" element={<Home idioma={idioma} setIdioma={setIdioma}/>}/>
        <Route exact path="/About" element={<About idioma={idioma} setIdioma={setIdioma}/>}/>
        <Route exact path='/Contact' element={<Contacto idioma={idioma} setIdioma={setIdioma}/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;