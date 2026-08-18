import { motion, useMotionValue, useSpring } from 'framer-motion'; 
import { useEffect } from 'react';

function Hero() {

    const mouseX = useMotionValue(0); 
    const mouseY = useMotionValue(0); 
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 }); 
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 }); 
    useEffect(() => { const handleMouseMove = (e) => 
        { const offsetX = (e.clientX - window.innerWidth / 2) * 0.3;
            const offsetY = (e.clientY - window.innerHeight / 2) * 0.3;
            mouseX.set(offsetX);
            mouseY.set(offsetY); }; 
        window.addEventListener('mousemove', handleMouseMove); 
        return () => window.removeEventListener('mousemove', handleMouseMove); }, [mouseX, mouseY]); 

    return (
        <section
            className="min-h-screen flex flex-col justify-center p-10"
            id="hero"
        >
            <div className="blob blob-1"></div>
            <motion.div
                style={{
                    translateX: springX,
                    translateY: springY,
                }}
            >
                <div className="blob blob-3"></div>
            </motion.div>
            <div className="blob blob-2"></div>

            <div className="relative z-10">
                <h1 className="text-7xl font-medium mb-4 text-gray-900 tracking-wider">
                    JORDAN KANE
                </h1>
                <p className="text-xl text-accent-400 mb-6 tracking-wider">
                    DESIGN ENGINEER
                </p>
                
            </div>
        </section>
    );
}

export default Hero;