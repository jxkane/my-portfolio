import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

function ScrollLine() {
    const [docHeight, setDocHeight] = useState(1000);

    useEffect(() => {
        const updateHeight = () => setDocHeight(document.body.scrollHeight);
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const { scrollYProgress } = useScroll();

    const pathD = `
        M 100 0
        C 40 150, 160 250, 90 400
        C 20 550, 140 650, 80 800
        C 30 950, 150 1050, 100 1200
        C 60 1350, 140 1450, 90 1600
    `;

    return (
        <div
            className="absolute top-0 right-0 w-[200px] pointer-events-none hidden lg:block"
            style={{ height: docHeight }}
        >
            <svg
                width="200"
                height={docHeight}
                viewBox={`0 0 200 ${docHeight}`}
                preserveAspectRatio="none"
                className="absolute top-0 right-0"
            >
                <motion.path
                    d={pathD.replace(/1600/g, docHeight)}
                    fill="none"
                    stroke="#5DCAA5"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{ pathLength: scrollYProgress }}
                    opacity={0.5}
                />
            </svg>
        </div>
    );
}

export default ScrollLine;