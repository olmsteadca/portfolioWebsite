import allProjects from "@/data/projects.json"
import ProjectCard from "./components/ProjectCard"

function Projects() {
  return ( 
    <div className="section-content">
      <h1 style={{ color: "#FFFFFF" }}>Projects</h1>
      <div className="transparent-container" style={{ padding: "2rem" }}>
        <ul className="flex-column" style={{ width: "95%", padding: "0", justifySelf: "center"}}>
          {allProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              date={project.date}
              desc={project.description}
              thumbnail={project.image}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;