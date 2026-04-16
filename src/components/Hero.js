function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center p-10" id="hero">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="relative z-10">           
            <h1 className="text-5xl font-bold mb-4 text-white">Jordan Kane</h1>
            <p className="text-xl text-accent-400 mb-6">Medical Illustrator & Creative Developer</p>
            <p className="text-lg text-gray-400 max-w-xl">
                I create visual tools and interactive content for healthcare and life sciences. 
            </p>
            </div>
                
        </section>
    );
}

export default Hero;