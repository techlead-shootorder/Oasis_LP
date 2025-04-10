const ageGroups = [
    { label: 'Age: 18-24', value: '18-24' },
    { label: 'Age: 25-34', value: '25-34' },
    { label: 'Age: 35-44', value: '35-44' },
    { label: 'Age: 45+', value: '45+' },
];

export default function Step1({ onNext }) {
    return (
        <div className="min-h-screen flex justify-center px-4 mt-16">

            <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Personal Health Plan</h2>
                <p className="text-gray-600 mb-6 text-[24px]">according to your age</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {ageGroups.map((age, idx) => (
                        <button
                            key={idx}
                            onClick={() => onNext({ ageGroup: age.value })}
                            className="bg-purple-600 text-white rounded-lg p-4 hover:bg-purple-700 transition-all"
                        >
                            {age.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
