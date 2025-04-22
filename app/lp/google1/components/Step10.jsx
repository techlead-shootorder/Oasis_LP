
export default function Step6({ onNext }) {
    // Handle next button click
    const handleNext = () => {
        // You can pass any data you want to store about this step
        onNext('joyfulPregnancyRevealAcknowledge', true);
    };

    return (
        <div className="flex flex-col items-center justify-between h-full p-4 bg-white">
            
            {/* Title and message */}
            <div className="text-center mb-4 mt-6">
                <p className="text-gray-800 font-medium text-lg">
                    At Oasis, our success rates are
                    <br />
                    <span className='text-2xl font-bold'>upto 70%.</span>
                    
                    <br />
                    We have also helped couples
                    <br />
                    with advanced maternal age have babies.
                </p>
            </div>

            {/* Pregnant woman illustration */}
            <div className="flex-grow flex items-center justify-center mt-6">
                <img
                    src="/images/google1/joyful-pregnancy-reveal.png"
                    alt="Pregnant woman"
                    className="w-auto h-64 sm:h-80"
                />
            </div>

            {/* Next button */}
            <div className="w-full mb-6">
                <button
                    onClick={handleNext}
                    className="w-full py-[8px] bg-primary text-white rounded-md font-medium"
                >
                    Next
                </button>
            </div>
        </div>
    );
}