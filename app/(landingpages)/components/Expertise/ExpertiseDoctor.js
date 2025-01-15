import React from 'react'

const ExpertiseDoctor = () => {

    const areasOfExpertise = [
        {type: 'IVF Failure Cases'},
        {type: 'Reproductive Endocrinology'},
        {type: 'Sonology'},
        {type: 'PCOS'}
        
    ]
    return (
        <div className='py-10'>
            <div className='max-w-7xl mx-auto px-[20px] '>
                <div className=''>
                    <h1 className='text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2] font-bold text-primary text-center tracking-wide mb-4'>
                        Areas Of Expertise
                    </h1>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                       {areasOfExpertise.map((item, index)=>(
                        <div key={index} className='p-8 bg-red-100 text-primary rounded-xl text-md sm:text-lg text-center'>
                            {item.type}
                        </div>
                       )) }
                      

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpertiseDoctor