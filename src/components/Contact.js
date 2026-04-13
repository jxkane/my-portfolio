function Contact() {
    return (
        <section className="p-10 max-w-3xl mx-auto text-center" id="contact">
            <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
                Interested in working together? Drop me a message.
            </p>
            <div className="flex justify-center gap-6">
                <a href="mailto:hello@visualmedguide.com" className="bg-accent-500 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
                    Email Me
                </a>
                <a href="https://www.linkedin.com/in/jordan-kane-58719720a" target="_blank" rel="noopener noreferrer" className="border border=accent-500 text-accent-400 px-6 py-3 rounded-lg hover:bg-dark-800">
                Linkedin
                </a>
                
            </div>
        </section>
    );
}

export default Contact;