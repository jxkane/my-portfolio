function CaseStudyModal({ isOpen, onClose, title, imageSrc, caseStudy }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8"
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
            </div>
        </div>
    );
}

export default CaseStudyModal;