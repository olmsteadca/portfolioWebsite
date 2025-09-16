import Project from "$/projects/components/ProjectCard.jsx"
import Projects from "@/data/projects.json"


function Featured() {
  var featuredProjects = Projects.filter(project => project.feature);

  return (
    <section id="featured-projects-section">
      <div className="section-content">
        <h1>Featured Projects</h1>
        <ul className="flex-column" style={{ padding: "2rem", listStyle: "none"}}>
          {featuredProjects.map((project) => (
            <Project
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
    </section>
  );
}

export default Featured;
