
import React, { memo, useMemo, Suspense } from 'react';
import { normalizeCityParams, getFilteredData } from './helper';
import masterlp3 from "@/util/lp/masterlp3";
import nearByAreas from "@/util/lp/nearByAreas"
import dynamic from 'next/dynamic';
import YatraHeader from "@/app/(landingpages)/components/Header/YatraHeader";
import HeroYatra from "./HeroYatra";
import WhoIsThisFor from '@/app/(landingpages)/components/WhoIsThisFor/WhoIsThisFor';
import BusRouteMap from './BusRouteTable';
import JananiYatraBusTracker from '@/app/(landingpages)/components/JananiYatraBusTracker/JananiYatraBusTracker';
import IVFPopup from '../../(landingpages)/components/IVFPopup/IVFPopup';

const MinimalLoader = () => <div className="animate-pulse bg-gray-200 h-10" />;
const ComponentLoader = () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />;


// Dynamic components with single import pattern
const DynamicComponents = {
  WhoIsThisFor: dynamic(
    () => import('@/app/(landingpages)/components/WhoIsThisFor/WhoIsThisFor'),
    { loading: () => <MinimalLoader /> }
  ),
  IVFPopup: dynamic(
    () => import('../../(landingpages)/components/IVFPopup/IVFPopup'),
    { loading: () => <MinimalLoader /> }
  ),
  StickyButtonScreenlp3: dynamic(
    () => import('@/app/(landingpages)/components/StickyButtonScreen/StickyButtonScreenlp3'),
    { loading: () => <MinimalLoader /> }
  ),

  JananiYatraBusTracker: dynamic(
    ()=> import('@/app/(landingpages)/components/JananiYatraBusTracker/JananiYatraBusTracker'),
    { loading: () => <MinimalLoader /> }
  ),

  StatisticBannerV2: dynamic(
    () => import('@/app/(landingpages)/components/Hero/StatisticsBannerV2'),
    { loading: () => <ComponentLoader /> }
  ),
  BusRouteTable: dynamic(
    () => import('./BusRouteTable'),
    { loading: () => <ComponentLoader /> }
  ),
  
  Treatmentlp3: dynamic(
    () => import('@/app/(landingpages)/components/Treatment/Treatmentlp3'),
    { loading: () => <ComponentLoader /> }
  ),
  SpeciaListslp3: dynamic(
    () => import('@/app/(landingpages)/components/Specialists/SpeciaListslp3'),
    { loading: () => <ComponentLoader /> }
  ),
  YatraReview: dynamic(
    () => import('@/app/(landingpages)/components/Review/YatraReview'),
    { loading: () => <ComponentLoader /> }
  ),
  TrustedCliniclp3: dynamic(
    () => import('@/app/(landingpages)/components/TrustedClinic/TrustedCliniclp3'),
    { loading: () => <ComponentLoader /> }
  ),
  Centerslp3: dynamic(
    () => import('@/app/(landingpages)/components/Centers/Centerslp3'),
    { loading: () => <ComponentLoader /> }
  ),
  ChooseOasislp3: dynamic(
    () => import('@/app/(landingpages)/components/ChooseOasis/ChooseOasislp3'),
    { loading: () => <ComponentLoader /> }
  ),
  AwardV2: dynamic(
    () => import('@/app/(landingpages)/components/Award/AwardV2'),
    { loading: () => <ComponentLoader /> }
  ),
  YatraDoctors: dynamic(
    () => import('@/app/(landingpages)/components/BestDoctors/YatraDoctors'),
    { loading: () => <ComponentLoader /> }
  ),
  IVFClinicSliderlp3: dynamic(
    () => import('@/app/(landingpages)/components/IVFClinicSlider/IVFClinicSliderlp3'),
    { loading: () => <ComponentLoader /> }
  ),
  YatraGallery: dynamic(
      () => import('@/app/(landingpages)/components/Gallery/YatraGallery'),
      { loading: () => <ComponentLoader /> }
    ),
  PlanInfolp3: dynamic(
    () => import('@/app/(landingpages)/components/PlanInfo/PlanInfolp3'),
    { loading: () => <ComponentLoader /> }
  ),
  YatraFaq: dynamic(
    () => import('@/app/(landingpages)/components/Faq/YatraFaq'),
    { loading: () => <ComponentLoader /> }
  ),
  ExploreCenterslp3: dynamic(
    () => import('@/app/(landingpages)/components/Centers/ExploreCenterslp3'),
    { loading: () => <ComponentLoader /> }
  ),
  FooterStickyButtonlp3: dynamic(
    () => import('@/app/(landingpages)/components/FooterStickyButtons/FooterStickyButtonlp3'),
    { loading: () => <MinimalLoader /> }
  ),
  FooterV2: dynamic(
    () => import('@/app/(landingpages)/components/Footer/FooterV2'),
    { loading: () => <ComponentLoader /> }
  ),
  YatraPhoneCall: dynamic(
    () => import('@/app/(landingpages)/components/PhoneCall/YatraPhoneCall'),
    { loading: () => <MinimalLoader /> }
  )
}



export async function generateStaticParams() {
  const params = [];

  masterlp3.forEach((item) => {
    params.push({ city: item.center_name });
  });

  return params;
}


const Page = memo(() => {
//   const { city: rawCity } = params;
const isfemaleAssessment = false;
  const { city, isMeta, metanum, googel1num, internal  } = normalizeCityParams('india');

  const filteredCity = useMemo(() => masterlp3.find((center) => center.center_name === city), [city]);
  const nearByCenters = useMemo(() => nearByAreas.find((center)=> center.center_name === city), [city]); 
  const { reviews: filteredReview, doctors: filteredDoctors, videos: cityVideos } =
    useMemo(() => getFilteredData(city, filteredCity), [city, filteredCity]);

  return (
    <>
      <section className="relative overflow-y-auto">
        <header id="headerlp3">
          <YatraHeader center={filteredCity} metanum={metanum} googel1num={googel1num}/>
        </header>

        <IVFPopup/>

        <Suspense fallback={<MinimalLoader />}>
          <DynamicComponents.StickyButtonScreenlp3 center={filteredCity} />
        </Suspense>

        <main>

          <HeroYatra center={filteredCity} isMeta={isMeta} internal={internal} isfemaleAssessment={isfemaleAssessment}  />
            
           <WhoIsThisFor/>

           <JananiYatraBusTracker />
           <BusRouteMap/> 
          <div className="mt-[20px] md:mt-0">
            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.StatisticBannerV2 />
            </Suspense>
          </div>

          <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.YatraDoctors
                center={filteredCity}
                // filteredDoctors={filteredDoctors}
                isMeta={isMeta}
                internal={internal}
              />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
                          <DynamicComponents.YatraGallery
                            center={filteredCity}
                            filteredDoctors={filteredDoctors}
                            isMeta={isMeta}
                            internal={internal}
                          />
                        </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.IVFClinicSliderlp3
                center={filteredCity}
                cityVideos={cityVideos}
              />
            </Suspense>

            {/* <section className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 lg:py-16 bg-[url(/images/lp/campaign/treatment_bg_img_cropped.png)] bg-repeat mb-10 lg:mb-16 relative"> */}
            
              <Suspense fallback={<ComponentLoader />}>
                <DynamicComponents.YatraReview
                  center={filteredCity}
                  filteredReview={filteredReview}
                />
              </Suspense>
              
              <Suspense fallback={<ComponentLoader />}>
                <DynamicComponents.TrustedCliniclp3 center={filteredCity} />
              </Suspense>
            {/* </section> */}

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.AwardV2 />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Centerslp3 />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.SpeciaListslp3 isMeta={isMeta} internal={internal} />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Treatmentlp3 center={filteredCity} />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.YatraFaq />
            </Suspense>


            {/* <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.ChooseOasislp3 center={filteredCity} />
            </Suspense> */}

{/* <Suspense fallback={<ComponentLoader />}>
      <DynamicComponents.PlanInfolp3 isMeta={isMeta} internal={internal} />
      </Suspense> */}

            

           {city != 'india' && <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.ExploreCenterslp3 nearByCenters={nearByCenters}/>
            </Suspense>}


            <Suspense fallback={<MinimalLoader />}>
              <DynamicComponents.FooterStickyButtonlp3 center={filteredCity} />
            </Suspense>
            </main>
            
             {/* testing */}
            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.FooterV2 />
            </Suspense>

            {!googel1num && <Suspense fallback={<MinimalLoader />}>
              <DynamicComponents.YatraPhoneCall center={filteredCity} metanum={metanum} />
            </Suspense>}


          
        
      </section>
    </>
  );
});

Page.displayName = 'Page';

export default Page;
