import React, { useState } from 'react';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {HashRouter as BrowserRouter, Routes as Switch, Route} from 'react-router-dom';
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
        <Route exact path="/About" element={<About />}/>
        <Route exact path='/SobreMi' Component={About} />
        <Route exact path='/Contacto' Component={Contacto} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;