import React from 'react'
import Header from '@/app/(landingpages)/siteLinkComponent/Header'
import Hero from '@/app/(landingpages)/siteLinkComponent/Hero'
import Stats from '@/app/(landingpages)/siteLinkComponent/Stats'
import RightStickyButton from '@/app/(landingpages)/siteLinkComponent/RightStickyButton'
import Graph from '@/app/(landingpages)/siteLinkComponent/Graph'
import SiteLinkFooter from '../../(landingpages)/siteLinkComponent/SiteLinkFooter'

const page = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Stats/>
        <Graph/>
        <RightStickyButton/>
        <SiteLinkFooter/>

    </div>
  )
}

export default page