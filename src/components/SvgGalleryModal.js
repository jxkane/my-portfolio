import SvgEmbed from './SvgEmbed';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const svgs = [
    { src: '/svgs/right-pleural-cavity-medial.svg', title: 'Right Pleural Cavity (Medial)', caption: 'Hover to reveal anatomical structures' },
    { src: '/svgs/ercp.svg', title: 'ERCP', caption: 'Interactive hepatobiliary anatomy' },
    { src: '/svgs/bronchoscopy-anatomical-maps.svg', title: 'Bronchoscopy Map', caption: 'Hover to reveal anatomical structures' },
    { src: '/svgs/mediastinal-eus.svg', title: 'Mediastinal EUS Map', caption: 'Hover to reveal anatomical structures' },
];

function SvgGalleryModal({ isOpen, onClose }) {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
    if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '15px';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-6"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.75, ease: 'easeOut' }}
                        className="bg-white/95 backdrop-blur-xl rounded-3xl max-w-5xl w-full max-h-[85vh] overflow-y-auto p-6 scrollbar-hide shadow-2xl ring-1 ring-white/40"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-regular text-gray-900">Interactive Clinical Procedure Maps <i>(Click to Expand)</i></h3>
                            <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-2xl">×</button>
                        </div>

                        {selected ? (
                            <div>
                                <button
                                    onClick={() => setSelected(null)}
                                    className="text-accent-400 hover:underline text-sm mb-4"
                                >
                                    ← Back to all maps
                                </button>
                                <div className="h-[60vh] bg-white rounded-lg p-4">
                                    <SvgEmbed src={selected.src} title={selected.title} />
                                </div>
                                <p className="text-gray-900 font-medium mt-3 text-lg">{selected.title}</p>
                                <p className="text-gray-600 text-sm">{selected.caption}</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {svgs.map((s) => (
                                    <div
                                        key={s.src}
                                        onClick={() => setSelected(s)}
                                        className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-accent-400 transition-colors"
                                    >
                                        <div className="h-64"><SvgEmbed src={s.src} title={s.title} /></div>
                                        <p className="text-gray-900 font-medium mt-3">{s.title}</p>
                                        <p className="text-gray-600 text-sm">{s.caption}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default SvgGalleryModal;