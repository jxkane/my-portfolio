function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center p-10" id="hero">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="relative z-10">           
            <h1 className="text-5xl mb-4 text-gray-900 tracking-wider">JORDAN KANE</h1>
            <p className="text-xl text-accent-400 mb-6 tracking-wider">DESIGN ENGINEER </p>
            <p className="text-lg text-gray-600 max-w-xl">
                I create visual tools and interactive content for healthcare and life sciences. 
            </p>
            </div>
                
        </section>
    );
}

export default Hero;