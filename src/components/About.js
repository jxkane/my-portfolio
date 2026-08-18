import Reveal from './Reveal';

function About() {
    return (
        <section id="about" className="p-10 max-w-5xl mx-auto">
            <Reveal>
                <h2 className="text-3xl font-regular mb-6 text-gray-900">
                    About
                </h2>

                <p className="text-gray-600 mb-4">
                    I'm a Design Engineer with a background in medical illustration — I have an MSc in Medical Illustration and a Level 3 qualification in Software Development. I design and build interactive tools and interfaces for healthcare, pharma, and life sciences, combining clinical accuracy with hands-on frontend development.
                </p>

                <p className="text-gray-600">
                    Whether it's an interactive web deliverable or a medical app, I bring both clinical accuracy and technical execution to every project.
                </p>
            </Reveal>
        </section>
    );
}

export default About;