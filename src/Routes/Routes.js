import React from 'react';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacto from '../Pages/Contacto';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' Component={Home} />
        <Route exact path='/SobreMi' Component={About} />
        <Route exact path='/Contacto' Component={Contacto} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;