import projects from '../data/projects';


function ProjectCards({ title, description, tags }) {
    return (
        <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
function Projects () {
    return (
        <section className="p-10">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
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