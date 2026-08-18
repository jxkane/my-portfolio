import projects from '../data/projects';
import { useState } from 'react';
import SvgGalleryModal from './SvgGalleryModal';
import PhoneFrame from './PhoneFrame';
import CaseStudyModal from './CaseStudyModal';
import Reveal from './Reveal';

function ProjectCards({ title, description, tags, link, onGalleryClick, videoSrc, isPhone, imageSrc, onCaseStudyClick }) {
    return (
        <div className="flex flex-col md:flex-row gap-10 items-center py-8">
            <div className="w-full md:w-2/5">
                <h3 className="text-3xl font-medium mb-4 text-gray-900">
                    {title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
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
                        <a href={link}
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

            <div className="w-full md:w-3/5 flex justify-center">
                <div className="relative w-full max-w-xlg">
                    {videoSrc && isPhone && (
                        <div className="drop-shadow-2xl">
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
                        </div>
                    )}

                    {videoSrc && !isPhone && (
                        <video
                            src={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="max-w-2xl rounded-lg shadow-xl"
                        />
                    )}

                    {imageSrc && (
                        <img
                            src={imageSrc}
                            alt={title}
                            onClick={onCaseStudyClick}
                            className="max-w-2xl rounded-lg shadow-xl cursor-pointer"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

function Projects() {
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [caseStudyOpen, setCaseStudyOpen] = useState(false);

    return (
        <section className="p-10" id="projects">
            <h2 className="text-3xl font-regular mb-8 text-gray-900">Projects</h2>

            <div className="flex flex-col gap-80 max-w-5xl mx-auto">
                {projects.map((project, index) => (
                    <Reveal key={project.id} delay={index * 0.15}>
                        <ProjectCards
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            link={project.link}
                            onGalleryClick={project.id === 3 ? () => setGalleryOpen(true) : undefined}
                            videoSrc={project.videoSrc}
                            isPhone={project.id === 1}
                            imageSrc={project.imageSrc}
                            onCaseStudyClick={project.id === 2 ? () => setCaseStudyOpen(true) : undefined}
                        />
                    </Reveal>
                ))}
            </div>

            <SvgGalleryModal isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />

            <CaseStudyModal
                isOpen={caseStudyOpen}
                onClose={() => setCaseStudyOpen(false)}
                title="Interactive HTML5 Video"
                imageSrc="/images/html5-screenshot-blurred.png"
                caseStudy={projects.find(p => p.id === 2)?.caseStudy}
            />
        </section>
    );
}

export default Projects;