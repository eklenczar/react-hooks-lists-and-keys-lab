import React from "react";
// import ProjectList from "./ProjectList"

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  const renderTechs = technologies.map(tech => {
    return <span key={tech}>{tech}</span>
  })
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {renderTechs}
      </div>
    </div>
  );
}

export default ProjectItem;
