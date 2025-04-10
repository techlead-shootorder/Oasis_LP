export default function Step3({ data }) {
    return (
        <div className="min-h-screen flex justify-center px-4 mt-16 w-full">

            <div className="text-center">
                <h2 className="text-3xl font-bold text-purple-700 mb-4">
                    1.4 million users have chosen us
                </h2>
                <p className="text-gray-600">
                    to stay in control of their conception journey
                </p>
                <div className="mt-8 text-left text-sm text-gray-500">
                    <p><strong>Age Group:</strong> {data.ageGroup}</p>
                    <p><strong>Need:</strong> {data.helpNeeded}</p>
                </div>
            </div>
        </div>
    );
}
