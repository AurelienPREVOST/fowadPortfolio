import React, { useEffect, useRef, useState } from 'react';

const ProjectItem = ({ params }) => {

  const { 
    titre, 
    courtePresentation,
    codeLien,
    targetLien,
    illustration
  } = params;

  return (
    <div className={`projectCard-item vw25`} >
        <>
          <div className="Illustration-container">
            <img src={illustration} alt={titre}/>
          </div>
          <div className="projectCard-info">
            <h2>{titre}</h2>
            <p>{courtePresentation}</p>
            <div className="projectCard-buttons">
              <a href={codeLien}>Voir le code</a>
              <a href={targetLien} target="_blank" rel="noopener noreferrer">Tester le code</a>
            </div>
          </div>
        </>
    </div>
  );
};

export default ProjectItem;
