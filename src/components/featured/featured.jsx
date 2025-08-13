import "./featured.css"
import Project from "../project/project.jsx"
import Projects from "../../data/projects.json"


function featured() {
    var featuredProjects = Projects.filter(project => project.feature);
    return (

        <section className="featured-projects" id="featured-section">
            <div className="featured-spacing">
                <h1 className="featured-title">Featured Projects</h1>

                <div className="project-list">
                    <ul>
                        {featuredProjects.map((project) => (
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
        </section>
    );
}

export default featured;
