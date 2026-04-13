function Contact() {
    return (
        <section className="p-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
                Interested in working together? Drop me a message.
            </p>
            <div className="flex justify-center gap-6">
                <a href="mailto:hello@visualmedguide.com" className="bg-gray-900 text-white px-6 py3 rounded-lg hover:bg-gray-700">
                    Email Me
                </a>
                <a href="https://www.linkedin.com/in/jordan-kane-58719720a" target="_blank" rel="noopener noreferrer" className="border border=gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100">
                Linkedin
                </a>
                
            </div>
        </section>
    );
}

export default Contact;