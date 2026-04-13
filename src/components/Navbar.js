function Navbar () {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 px-10 py-4 flex justify-between items-center">
            <span className="text-xl font-bold">JK</span>
            <div className="flex gap-6">
                <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
                <a href="#skills" className="text-gray-800 hover:text-gray-900">Skills</a>
                <a href="#contact" className="text-gray-800 hover:text-gray-900">Contact</a>
            </div>
        
        
        
        
        </nav>   
    );
}

export default Navbar;