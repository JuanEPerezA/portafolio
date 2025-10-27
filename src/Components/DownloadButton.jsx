import React, { memo } from 'react';
import lenguaje from '../Configs/lenguaje';

const DownloadButton = memo(({ idioma, className = "downloadBtn" }) => {
  return (
    <button className={className}>
      <img src="./Assets/Images/download.png" alt="icon" className="mr-2" style={{ display: "unset" }} />
      <a href={idioma === 'EN' ? "./Assets/CV Juan Perez.pdf" : "./Assets/JEPA-CV.pdf"} target="_blank" rel="noopener noreferrer" download="JuanPérez.pdf" className='text-white'>
        {lenguaje.download_cv[`${idioma}`]}
      </a>
    </button>
  );
});

DownloadButton.displayName = 'DownloadButton';

export default DownloadButton;
