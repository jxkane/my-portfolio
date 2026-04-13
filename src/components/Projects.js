import projects from '../data/projects';


function ProjectCards({ title, description, tags }) {
    return (
        <div className="border border-dark-700 bg-dark-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="bg-dark-700 text-accent-400 text-sm px-3 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
function Projects () {
    return (
        <section className="p-10" id="projects">
            <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {projects.map ((project) => (
                <ProjectCards
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                />
               ))} 
            </div>
        </section>
    );
}

export default Projects;