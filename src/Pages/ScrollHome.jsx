// import Home from './Home';
import About from './About';
import Resume from './Resume';
import Contacto from './Contacto';
import { NavbarScroll } from '../Components/NavbarScroll';

export const ScrollHome = ({idioma, setIdioma}) => {
  return (
    <>
      <NavbarScroll idioma={idioma} setIdioma={setIdioma}/>
      {/* <section id="Home">
        <Home idioma={idioma} setIdioma={setIdioma}/>
      </section> */}

      <section id="Resume">
        <br/>
        <Resume idioma={idioma} setIdioma={setIdioma}/>
      </section>

      <section id="About">
        <br/>
        <About idioma={idioma} setIdioma={setIdioma}/>
      </section>

      <section id="Contacto">
        <Contacto idioma={idioma} setIdioma={setIdioma}/>
      </section>
    </>
  );
}