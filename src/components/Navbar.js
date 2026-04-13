import { useState } from 'react';



function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 bg-dark-800 shadow-lg z-50 px-10 py-4 flex justify-between items-center">
            <span className="text-xl font-bold text-accent-400">JK</span>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-400 text-2xl">
                {isOpen ? 'x' : '☰'}
            </button>
            <div className="hidden md:flex gap-6">
                <a href="#about" className="text-gray-400 hover:text-accent-400">About</a>
                <a href="#projects" className="text-gray-400 hover:text-accent-400">Projects</a>
                <a href="#skills" className="text-gray-400 hover:text-accent-400">Skills</a>
                <a href="#contact" className="text-gray-400 hover:text-accent-400">Contact</a>
            </div>
            {isOpen && (
            <div className="md:hidden flex flex-col gap-4 pt-4">
                <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-accent-400">About</a>
                <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-accent-400">Projects</a>
                <a href="#skills" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-accent-400">Skills</a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-accent-400">Contact</a>
            </div>
            )}
        
        </nav>   
    );
}

export default Navbar;