
export default function Step6({ onNext }) {
    // Handle next button click
    const handleNext = () => {
        // You can pass any data you want to store about this step
        onNext('docTalk', true);
    };

    return (
        <div className="flex flex-col items-center justify-between h-full p-4 bg-white">


            {/* Title and message */}
            <div className="text-center mb-4 mt-6">
                <p className="text-gray-800 font-medium text-lg">
                    Oasis Fertility offers
                    <br />
                    services  in 31+ centers spread
                    <br />
                    across  India with  personalized and

                </p>
                <h2 className='text-2xl font-bold'>Science-Based Treatments!</h2>
            </div>

            {/* Doctor Talk */}
            <div className="flex-grow flex items-center justify-center mt-6">
                <img
                    src="/images/google1/doc-talk.png"
                    alt="doc-talk"
                    className="w-auto h-72 object-contain"
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