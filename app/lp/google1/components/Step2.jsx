const options = [
    "Get Pregnant",
    "Tracking my period",
    "Understanding my body",
    "Decoding my discharge",
    "Enhance my sexlife",
    "None of the above",
];

export default function Step2({ onNext, onBack }) {
    return (
        <div className="flex justify-center px-4 mt-16">
            <div className="text-center">

                <h2 className="text-xl font-semibold mb-6">What can we help you with?</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {options.map((opt, idx) => (
                        <button
                            key={idx}
                            onClick={() => onNext({ helpNeeded: opt })}
                            className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100 transition-all"
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
