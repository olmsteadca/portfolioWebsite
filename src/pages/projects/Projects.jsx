import allProjects from "@/data/projects.json"
import Project from "./components/ProjectCard"

function Projects() {
    return (
        <div className="transparent-container" style={{ marginBottom: "2rem" }}>
            <div className="section-content">
                <h1 style={{ color: "#29478A"}}>My Projects</h1>
                <ul className="flex-column" style={{ width: "90%", padding: "0" }}>
                    {allProjects.map((project) => (
                        <Project
                            key={project.id}
                            title={project.title}
                            date={project.date}
                            desc={project.description}
                            thumbnail={project.image}
                            tags={project.tags}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Projects;