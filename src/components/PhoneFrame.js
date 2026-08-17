function PhoneFrame({ children }) {
    return (
        <div className="relative mx-auto w-full max-w-[220px] aspect-[9/19.5]">
            <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] shadow-xl border-[8px] border-gray-900">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-xl z-20"></div>
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white">
                    {children}
                </div>
            </div>
        </div>
    );
}
export default PhoneFrame;