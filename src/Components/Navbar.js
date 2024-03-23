import React, { useContext, useEffect } from 'react';
import DarkMode from './DarkMode';
import ReactCountryFlag from "react-country-flag"
import lenguaje from '../Config/lenguaje';
import { BrowserRouter } from 'react-router-dom';
import { LanguageContext } from '../Config/LanguageProvider';

const Navbar = () => {
  const { idioma, setIdioma } = useContext(LanguageContext); // Obtén el estado y la función de cambio de idioma del contexto

  useEffect(() => {
    console.log('Estado del idioma en Navbar:', idioma);
  }, [idioma]);

   return (
      <>
      <BrowserRouter>
      <nav className="bg-light darkMode">
         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                     <span className="absolute -inset-0.5"></span>
                     <span className="sr-only">Open main menu</span>
                     <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                     </svg>
                     <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                     </svg>
                  </button>
               </div>
               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                     <div className="flex space-x-4">
                        <a href="/" className={`darkMode anavbar rounded-md px-3 py-2 text-sm font-medium ${window.location.pathname === '/' ? 'navBarActive' : '' }`}>{lenguaje.navbar_home[`${idioma}`]}</a>
                        <a href="/Resume" className={`darkMode anavbar rounded-md px-3 py-2 text-sm font-medium ${window.location.pathname === '/Resume' ? 'navBarActive' : '' }`}>{lenguaje.navbar_resume[`${idioma}`]}</a>
                        <a href="/About" className={`darkMode anavbar rounded-md px-3 py-2 text-sm font-medium ${window.location.pathname === '/About' ? 'navBarActive' : '' }`} >{lenguaje.navbar_about[`${idioma}`]}</a>
                        <a href="/Contact" className={`darkMode anavbar rounded-md px-3 py-2 text-sm font-medium ${window.location.pathname === '/Contact' ? 'navBarActive' : '' }`}>{lenguaje.navbar_contact[`${idioma}`]}</a>
                     </div>
                  </div>
               </div>
               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                     <div className="flex space-x-4">
                        <DarkMode/>
                     </div>
                  </div>
               </div>
               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               <div className="relative ml-3 darkMode">
                  <div className=" navbar-collapse" id="navbarCollapse">
                     <ul className="navbar-nav nav-tabs" style={{"borderColor":"transparent"}}>
                        <li className="nav-item">
                           <div className="dropdown">
                              <button className="btn darkMode dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                 {lenguaje.navbar_lenguaje[`${idioma}`]}
                              </button>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{"background":"transparent","borderColor":"transparent"}}>
                                 <li><button className="btn btn-link" onClick={() => setIdioma('EN')}><ReactCountryFlag countryCode="us" style={{width: '3em',height: '3em', borderRadius: '55%'}} svg /></button></li>
                                 <li><button className="btn btn-link" onClick={() => setIdioma('ES')}><ReactCountryFlag countryCode="es" style={{width: '3em',height: '3em', borderRadius: '55%'}} svg /></button></li>
                              </ul>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
               </div>
            </div>
         </div>

         <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
               <a href="/" className="darkMode anavbar rounded-md px-3 py-2 text-sm font-medium"><i className="fa-solid fa-house"></i></a>
               <a href="/Resume" className="block anavbar rounded-md px-3 py-2 text-base font-medium">{lenguaje.navbar_resume[`${idioma}`]}</a>
               <a href="/About" className="block anavbar rounded-md px-3 py-2 text-base font-medium">{lenguaje.navbar_about[`${idioma}`]}</a>
               <a href="/Contact" className="block anavbar rounded-md px-3 py-2 text-base font-medium">{lenguaje.navbar_contact[`${idioma}`]}</a>
            </div>
         </div>
      </nav>
      </BrowserRouter>
      </>
   );
}
 
export default Navbar;