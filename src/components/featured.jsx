import Project from "./project/project.jsx"
import Projects from "../data/projects.json"


function featured() {
    var featuredProjects = Projects.filter(project => project.feature);
    return (

        <section id="featured-projects-section">
            <div className="section-content">
                <h1 className="title">Featured Projects</h1>

                <div className="flex-card-column">
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
