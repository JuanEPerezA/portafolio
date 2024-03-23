// Nuevo componente LanguageProvider.js
import React, { useState } from 'react';

export const LanguageContext = React.createContext();

const LanguageProvider = ({ children }) => {
  const [idioma, setIdioma] = useState('ES');
  console.log('Estado actual del idioma:xxx:', idioma);

  return (
    <LanguageContext.Provider value={{ idioma, setIdioma }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
