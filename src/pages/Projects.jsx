import allProjects from '../data/projects.json';
import Project from '../components/project/project.jsx'

function Projects() {
    return (
        <div className="section-container">
            <div className="section-content">
                <h1 className="title">My Projects</h1>
                <ul className="flex-column">
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