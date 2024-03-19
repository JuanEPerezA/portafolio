import React from 'react';
import lenguaje from '../Config/lenguaje';
import Navbar from '../Components/Navbar';

const About = ({idioma, setIdioma}) => {
  return (
    <>
    <Navbar idioma={idioma} setIdioma={setIdioma}/>
    <h1>About**</h1>
    </>
  );
}

export default About;