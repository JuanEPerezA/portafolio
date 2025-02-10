import React from 'react';
// import lenguaje from '../Configs/lenguaje';
import DatosJEPA from '../Configs/datosJEPA';

const ResumeTest = ({idioma, setIdioma}) => {
  const dataJEPA = DatosJEPA(idioma);
  return (
    <ul>
      {dataJEPA.misConocimientos.map(conocimiento => (
        <li key={conocimiento.id}>{conocimiento.nombre}</li>
      ))}
    </ul>
  );
}

export default ResumeTest;