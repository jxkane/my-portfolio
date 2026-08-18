import { motion, AnimatePresence } from 'framer-motion';

function CaseStudyModal({ isOpen, onClose, title, imageSrc, caseStudy }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-medium text-gray-900">
                                {title}
                            </h3>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-900 text-2xl leading-none"
                            >
                                ×
                            </button>
                        </div>

                        <img
                            src={imageSrc}
                            alt={title}
                            className="w-full rounded-lg mb-6"
                        />

                        <p className="text-gray-600 whitespace-pre-line">
                            {caseStudy}
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default CaseStudyModal;