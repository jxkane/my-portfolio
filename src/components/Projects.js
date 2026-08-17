import projects from '../data/projects';
import { useState } from 'react'; 
import SvgGalleryModal from './SvgGalleryModal';




function ProjectCards({ title, description, tags, link, onGalleryClick, videoSrc }) {
    
    
    return (
        <div className="border border-dark-700 bg-dark-800 rounded-lg p-6">
            {videoSrc && (
                    <video
                        src={videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-70 object-cover rounded-lg mb-4 bg-dark-900"
                    />
)}

            <h3 className="text-xl font-regular mb-2 text-white">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="bg-dark-700 text-accent-400 text-sm px-3 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            {link && (
    
               <a href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-accent-400 text-dark-900 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-accent-300 transition-colors whitespace-nowrap ml-1 mt-5">View Live Demo</a>
            )}

            {onGalleryClick && (
               <button
                 onClick={onGalleryClick}
                 className="inline-flex items-center gap-1 bg-accent-400 text-dark-900 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-accent-300 transition-colors mt-5">
                View Gallery
                </button>
)}

        </div>
    );
}
function Projects () {
    const [galleryOpen, setGalleryOpen] = useState(false);
    return (
        <section className="p-10" id="projects">
            <h2 className="text-3xl font-regular mb-8 text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {projects.map ((project) => (
                <ProjectCards
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                onGalleryClick={project.id === 3 ? () => setGalleryOpen(true) : undefined}
                videoSrc={project.videoSrc}/>
               ))} 
            </div>
        <SvgGalleryModal isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />
        </section>
    );
}

export default Projects;