import React, { Suspense, lazy } from 'react';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { BrowserRouter, Routes as Switch, Route} from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./../Pages/Home'));
const ScrollHome = lazy(() => import('../Pages/ScrollHome').then(module => ({ default: module.ScrollHome })));
const About = lazy(() => import('./../Pages/About'));
const Resume = lazy(() => import('./../Pages/Resume'));
const Contacto = lazy(() => import('./../Pages/Contacto'));
// import NotFound from './../Pages/NotFound';

// Loading component
const Loading = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  </div>
);

const Routes = ({idioma, setIdioma}) => {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path='/Index' element={<ScrollHome idioma={idioma} setIdioma={setIdioma}/>}/>
          <Route exact path="/" element={<Home idioma={idioma} setIdioma={setIdioma}/>}/>
          <Route exact path="/Home" element={<Home idioma={idioma} setIdioma={setIdioma}/>}/>
          <Route exact path="/About" element={<About idioma={idioma} setIdioma={setIdioma}/>}/>
          <Route exact path="/Resume" element={<Resume idioma={idioma} setIdioma={setIdioma}/>}/>
          <Route exact path='/Contact' element={<Contacto idioma={idioma} setIdioma={setIdioma}/>} />
          <Route path="*" element={<Home idioma={idioma} setIdioma={setIdioma}/>} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;