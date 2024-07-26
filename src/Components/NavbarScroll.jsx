import React, { useEffect } from 'react';
import DarkMode from './DarkMode';
import ReactCountryFlag from "react-country-flag"
import lenguaje from '../Configs/lenguaje';
import { Disclosure } from '@headlessui/react';
import $ from 'jquery';

export const NavbarScroll = ({idioma, setIdioma}) => {
   useEffect(() => {
    localStorage.setItem("idiomaNuevo", idioma);
    $(".navbarNormal").hide()
   }, [idioma]);

   return (
      <>
      <Disclosure as="nav" className="darkMode navbarScroll">
        {({ open }) => (
          <>
            <header className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <nav className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <span className="socialbtn text-[#e14a84]">
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                    ) : (
                      <span className="socialbtn text-[#e14a84]">
                        <i className="fa-solid fa-bars"></i>
                      </span>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden sm:ml-6 sm:block flex flex-1 items-center justify-center hidden sm:ml-6 sm:block">
                  <a href="/Home" className={`darkMode anavbar rounded-md px-3 py-2 text-sm font-medium`}>{lenguaje.navbar_noScroll[`${idioma}`]}</a>
                  <a href="#Resume" className={`darkMode anavbar rounded-md px-3 py-2 text-sm font-medium`}>{lenguaje.navbar_resume[`${idioma}`]}</a>
                  <a href="#MisProyectos" className={`darkMode anavbar rounded-md px-3 py-2 text-sm font-medium`}>{lenguaje.misProyectos[`${idioma}`]}</a>
                  <a href="#About" className={`darkMode anavbar rounded-md px-3 py-2 text-sm font-medium`} >{lenguaje.navbar_about[`${idioma}`]}</a>
                  <a href="#Contacto" className={`darkMode anavbar rounded-md px-3 py-2 text-sm font-medium`}>{lenguaje.navbar_contact[`${idioma}`]}</a>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <DarkMode/>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ml-3 darkMode">
                  <section className="navbar-collapse hidden sm:ml-6 sm:block" id="navbarCollapse">
                    <ul className="navbar-nav nav-tabs" style={{"borderColor":"transparent"}}>
                        <li className="nav-item">
                          <section className="dropdown">
                            <button className="btn darkMode dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              {lenguaje.navbar_lenguaje[`${idioma}`]}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{"background":"transparent","borderColor":"transparent"}}>
                              <li><button className="btn btn-link" onClick={() => setIdioma('EN')}><ReactCountryFlag countryCode="us" style={{width: '3em',height: '3em', borderRadius: '55%'}} svg /></button></li>
                              <li><button className="btn btn-link" onClick={() => setIdioma('ES')}><ReactCountryFlag countryCode="es" style={{width: '3em',height: '3em', borderRadius: '55%'}} svg /></button></li>
                            </ul>
                          </section>
                        </li>
                    </ul>
                  </section>
                  <section className="navbar-collapse sm:hidden divIdioma" id="navbarCollapse">
                    {idioma === 'ES' ? (
                      <button id="btnEn" className="btn btn-link" onClick={() => setIdioma('EN')}><ReactCountryFlag countryCode="us" style={{width: '3em',height: '3em', borderRadius: '55%'}} svg /></button>
                    ) : (
                      <button id="btnEs" className="btn btn-link" onClick={() => setIdioma('ES')}><ReactCountryFlag countryCode="es" style={{width: '3em',height: '3em', borderRadius: '55%'}} svg /></button>
                    )}
                  </section>
                </div>
              </nav>
            </header>

            <Disclosure.Panel className="sm:hidden space-y-1 px-2 pb-3 pt-2" id="mobile-menu">
              <a href="/Home" className={`darkMode block anavbar rounded-md px-3 py-2 text-base font-medium`}><i className="fa-solid fa-house">​ㅤ</i>{lenguaje.navbar_noScroll[`${idioma}`]}</a>
              <a href="#Resume" className={`darkMode block anavbar rounded-md px-3 py-2 text-base font-medium`}><i className="fa-regular fa-file-lines">​ㅤ</i>{lenguaje.navbar_resume[`${idioma}`]}</a>
              <a href="#About" className={`darkMode block anavbar rounded-md px-3 py-2 text-base font-medium`} ><i className="fa-regular fa-user">​ㅤ</i>{lenguaje.navbar_about[`${idioma}`]}</a>
              <a href="#Contact" className={`darkMode block anavbar rounded-md px-3 py-2 text-base font-medium`}><i className="fa-solid fa-address-book">​ㅤ</i>{lenguaje.navbar_contact[`${idioma}`]}</a>
              <a href="#MisProyectos" className={`darkMode block anavbar rounded-md px-3 py-2 text-base font-medium`}><i className="fa-solid fa-pager">​ㅤ</i>{lenguaje.misProyectos[`${idioma}`]}</a>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      </>
   );
}
