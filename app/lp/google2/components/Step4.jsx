
export default function Step4({ onNext}) {
  // This step only displays information and doesn't collect any specific data
  // But we could track if the user has viewed this step
//   step 4

  // Handle next button click
  const handleNext = () => {
    // You can pass any data you want to store about this step
    onNext('fertilityInfoViewed', true);
  };

  return (
    <div className="p-2 flex flex-col h-full">
      <div className="flex-grow mb-[94px]">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-4">Did You Know?</h2>
        
        {/* Statistic Text */}
        <div className="text-center mb-6">
         
          <p className="text-gray-700 ">
            <span className='text-2xl font-bold'>1 in 6</span>  couples faces fertility challenges, and early consultation improves success rates!
          </p>
        </div>
        
        {/* Couple Icons Grid */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {/* First couple (highlighted) */}
          <div className="bg-white rounded-lg p-3 flex justify-center">
            <img src="/images/google1/orangeCouple.png" alt="Orange couple" className="h-16" />
          
          </div>
          
          {/* Other couples - purple */}
          {[...Array(5)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg p-3 flex justify-center">
              <img src="/images/google1/blueCouple.png" alt="Blue couple" className="h-16" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Next Button */}
      <div className="mt-auto">
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