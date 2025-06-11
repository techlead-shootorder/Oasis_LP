import React from 'react'
import Header from '@/app/(landingpages)/siteLinkComponent/Header'
import Hero from '@/app/(landingpages)/siteLinkComponent/Hero'
import Stats from '@/app/(landingpages)/siteLinkComponent/Stats'
import AboutUs from '@/app/(landingpages)/siteLinkComponent/AboutUs'
import MissionVission from '@/app/(landingpages)/siteLinkComponent/MissionVission'
import OurValues from '@/app/(landingpages)/siteLinkComponent/OurValues'
import SiteLinkFooter from '../../(landingpages)/siteLinkComponent/SiteLinkFooter'
import RightStickyButton from '@/app/(landingpages)/siteLinkComponent/RightStickyButton'






const page = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Stats/>
        <AboutUs/>
        <MissionVission/>
        <OurValues/>
        <RightStickyButton/>
        <SiteLinkFooter/>

    </div>
  )
}

export default page