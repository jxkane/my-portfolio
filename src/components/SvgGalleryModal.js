import SvgEmbed from './SvgEmbed';
import { useState, useEffect } from 'react';

const svgs = [
    { src: '/svgs/right-pleural-cavity-medial.svg', title: 'Right Pleural Cavity (Medial)', caption: 'Hover to reveal anatomical structures' },
    { src: '/svgs/ercp.svg', title: 'ERCP', caption: 'Interactive hepatobiliary anatomy' },
    { src: '/svgs/bronchoscopy-anatomical-maps.svg', title: 'Bronchoscopy Map', caption: 'Hover to reveal anatomical structures' },
    {src: '/svgs/mediastinal-eus.svg', title: 'Mediastinal EUS Map', caption: 'Hover to reveal anatomical structures' },
];

function SvgGalleryModal({ isOpen, onClose }) {
    const [selected, setSelected] = useState(null);
    useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
}, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6" onClick={onClose}>
            <div className="bg-dark-900 rounded-xl max-w-5xl w-full max-h-[85vh] overflow-y-auto p-6 scrollbar-hide" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">Interactive Clinical Procedure Maps <i>(Click to Expand)</i></h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
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
                        <p className="text-white font-medium mt-3 text-lg">{selected.title}</p>
                        <p className="text-gray-400 text-sm">{selected.caption}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {svgs.map((s) => (
                            <div
                                key={s.src}
                                onClick={() => setSelected(s)}
                                className="border border-dark-700 rounded-lg p-4 cursor-pointer hover:border-accent-400 transition-colors"
                            >
                                <div className="h-64"><SvgEmbed src={s.src} title={s.title} /></div>
                                <p className="text-white font-medium mt-3">{s.title}</p>
                                <p className="text-gray-400 text-sm">{s.caption}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SvgGalleryModal;