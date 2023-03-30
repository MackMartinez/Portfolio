import React from 'react';

const Projects = () => {

  const projectData = [1,2,3,4]; 

  return (
    <div>
      {projectData.map((item) =>(
        <div>item</div>
      ))}
    </div>
  );
}

export default Projects;
