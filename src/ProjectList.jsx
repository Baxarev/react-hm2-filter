const ProjectList = ({ projects }) => {
  return (
    <div className="projects-list">
      {projects.map((projects, index) => {
        return (
          <div key={index} className="projects-list__item">
            <img src={projects.img} alt={projects.category} />
          </div>
        );
      })}
    </div>
  )
}

export default ProjectList