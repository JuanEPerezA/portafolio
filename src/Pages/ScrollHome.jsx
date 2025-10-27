// import Home from './Home';
import React, { Suspense, lazy } from 'react';
const About = lazy(() => import('./About'));
const Resume = lazy(() => import('./Resume'));
const Contacto = lazy(() => import('./Contacto'));
const NavbarScroll = lazy(() => import('../Components/NavbarScroll').then(module => ({ default: module.NavbarScroll })));

export const ScrollHome = ({idioma, setIdioma}) => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div></div>}>
      <NavbarScroll idioma={idioma} setIdioma={setIdioma}/>
      {/* <section id="Home">
        <Home idioma={idioma} setIdioma={setIdioma}/>
      </section> */}
      <section id="About">
        <br/>
        <About idioma={idioma} setIdioma={setIdioma}/>
      </section>

      <section id="Resume">
        <br/>
        <Resume idioma={idioma} setIdioma={setIdioma}/>
      </section>

      <section id="Contacto">
        <Contacto idioma={idioma} setIdioma={setIdioma}/>
      </section>
    </Suspense>
  );
}
