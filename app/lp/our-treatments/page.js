import React from 'react'
import Header from '@/app/(landingpages)/siteLinkComponent/Header'
import Hero from '@/app/(landingpages)/siteLinkComponent/Hero'
import Stats from '@/app/(landingpages)/siteLinkComponent/Stats'
import SiteLinkFooter from '../../(landingpages)/siteLinkComponent/SiteLinkFooter'
import RightStickyButton from '@/app/(landingpages)/siteLinkComponent/RightStickyButton'
import OurTreatments from '@/app/(landingpages)/siteLinkComponent/OurTreatements'


const page = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Stats/>
        <div className="container my-12 md:mt-32">
                <p className="text-center fw-bold text-black my-3 text-lg">At Oasis, we are committed to offer evidence based fertility treatments with an individualized, warm and compassionate approach.
                </p>
                <p className="text-center text-black">
                Take a look at our fertility treatment options
                </p>

                <OurTreatments />
            </div>
        <RightStickyButton/>
        <SiteLinkFooter/>

    </div>
  )
}

export default page