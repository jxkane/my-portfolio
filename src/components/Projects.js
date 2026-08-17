import projects from '../data/projects';
import { useState } from 'react'; 
import SvgGalleryModal from './SvgGalleryModal';
import PhoneFrame from './PhoneFrame';




function ProjectCards({ title, description, tags, link, onGalleryClick, videoSrc, isPhone }) {
    
    
    return (
    <div className="flex flex-col gap-8 items-center border-b border-gray-200 py-12">
        <div className="w-full md:w-1/2 h-90 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
            {videoSrc && isPhone && (
                <PhoneFrame>
                    <video
                        src={videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </PhoneFrame>
            )}
            {videoSrc && !isPhone && (
                <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="max-w-md mx-auto h-full object-contain"
                />
            )}
        </div>

        <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-medium mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-gray-100 text-accent-600 text-sm px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex gap-3">
                {link && (
                    
                      <a  href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-accent-400 text-dark-900 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-accent-300 transition-colors"
                    >
                        View Live Demo
                    </a>
                )}
                {onGalleryClick && (
                    <button
                        onClick={onGalleryClick}
                        className="inline-flex items-center gap-1 bg-accent-400 text-dark-900 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-accent-300 transition-colors"
                    >
                        View Gallery
                    </button>
                )}
            </div>
        </div>
    </div>
);

}
function Projects () {
    const [galleryOpen, setGalleryOpen] = useState(false);
    return (
        <section className="p-10" id="projects">
            <h2 className="text-3xl font-regular mb-8 text-gray-900">Projects</h2>
            <div className="grid grid-cols-1 gap-6">
               {projects.map ((project) => (
                <ProjectCards
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                onGalleryClick={project.id === 3 ? () => setGalleryOpen(true) : undefined}
                videoSrc={project.videoSrc}
                isPhone={project.id === 1}/>
               ))} 
            </div>
        <SvgGalleryModal isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />
        </section>
    );
}

export default Projects;