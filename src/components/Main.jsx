import React from 'react';
import ProjectItem from './projectItem';
import seedData from '../seed/projectData';

const Main = () => {
  return (
    <section id='main'>
      {seedData.length === 0 ? (
        <p>Aucun projets de disponible pour le moment...</p>
      ) : (
        seedData.map(item => (
          <ProjectItem key={item.id} params={item} />
        ))
      )}
    </section>
  );
};

export default Main;
