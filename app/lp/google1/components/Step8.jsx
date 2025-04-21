
export default function Step8({ onNext }) {
  // Handle next button click
  const handleNext = () => {
    // You can pass any data you want to store about this step
    onNext('coupleDeliveredAcknowledged', true);
  };

  return (
    <div className="flex flex-col items-center justify-between h-full p-4 bg-white">
      {/* Title and message */}
       
 

      <div className="text-center mb-4 mt-6">
        <p className="text-gray-800 font-medium text-lg">
        Oasis Fertility has helped
          <br />
          thousands of couples deliver
          <br />
          <span className='text-2xl font-bold'>1,00,000+ babies.</span>
        </p>
      </div>
      
      {/* Pregnant woman illustration */}
      <div className="flex-grow flex items-center justify-center mt-6">
        <img 
          src="/images/google1/couple-with-baby.png" 
          alt="Pregnant woman" 
          className="w-auto h-[400px] md:h-72"
        />
      </div>
      
      {/* Next button */}
      <div className="w-full mb-6 -mt-16">
        <button
          onClick={handleNext}
          className="w-full py-3 bg-primary text-white rounded-md font-medium text-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}