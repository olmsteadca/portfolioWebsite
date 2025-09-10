import Project from "@/components/cards/ProjectCard"
import Projects from "@/data/projects.json"


function featured() {
    var featuredProjects = Projects.filter(project => project.feature);
    return (

        <section id="featured-projects-section">
            <div className="section-content">
                <h1>Featured Projects</h1>

                <ul className="flex-column" style={{padding : "0"}}>
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
        </section>
    );
}

export default featured;
