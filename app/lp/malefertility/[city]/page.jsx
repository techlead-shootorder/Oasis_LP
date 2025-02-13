
import React, { memo, useMemo, Suspense } from 'react';
import { normalizeCityParams, getFilteredData } from './helper';
import masterlp3 from "@/util/lp/masterlp3";
import nearByAreas from "@/util/lp/nearByAreas"
import dynamic from 'next/dynamic';


import MFHeader from "@/app/(landingpages)/components/Header/MFHeader";
import HeroMaleFertility from "@/app/(landingpages)/components/Hero/HeroMaleFertility";

const MinimalLoader = () => <div className="animate-pulse bg-gray-200 h-10" />;
const ComponentLoader = () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />;


// Dynamic components with single import pattern
const DynamicComponents = {
  StickyButtonScreenlp3: dynamic(
    () => import('@/app/(landingpages)/components/StickyButtonScreen/StickyButtonScreenlp3'),
    { loading: () => <MinimalLoader /> }
  ),
  MFStatisticsBanner: dynamic(
    () => import('@/app/(landingpages)/components/Hero/MFStatisticsBanner'),
    { loading: () => <ComponentLoader /> }
  ),
  MFTreatmentlp3: dynamic(
    () => import('@/app/(landingpages)/components/Treatment/MFTreatmentlp3'),
    { loading: () => <ComponentLoader /> }
  ),
  MFSpeciaListslp3: dynamic(
    () => import('@/app/(landingpages)/components/Specialists/MFSpeciaListslp3'),
    { loading: () => <ComponentLoader /> }
  ),
  MFReviewlp3: dynamic(
    () => import('@/app/(landingpages)/components/Review/MFReviewlp3'),
    { loading: () => <ComponentLoader /> }
  ),
  MFTrustedCliniclp3: dynamic(
    () => import('@/app/(landingpages)/components/TrustedClinic/MFTrustedCliniclp3'),
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
  MFAwardV2: dynamic(
    () => import('@/app/(landingpages)/components/Award/MFAwardV2'),
    { loading: () => <ComponentLoader /> }
  ),
  MFBestDoctorslp3: dynamic(
    () => import('@/app/(landingpages)/components/BestDoctors/MFBestDoctorslp3'),
    { loading: () => <ComponentLoader /> }
  ),
  MFIVFClinicSliderlp3: dynamic(
    () => import('@/app/(landingpages)/components/IVFClinicSlider/MFIVFClinicSliderlp3'),
    { loading: () => <ComponentLoader /> }
  ),
  PlanInfolp3: dynamic(
    () => import('@/app/(landingpages)/components/PlanInfo/PlanInfolp3'),
    { loading: () => <ComponentLoader /> }
  ),
  MFFaqlp3: dynamic(
    () => import('@/app/(landingpages)/components/Faq/MFFaqlp3'),
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
  MFPhoneCall: dynamic(
    () => import('@/app/(landingpages)/components/PhoneCall/MFPhoneCall'),
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


const Page = memo(({ params }) => {
    const { city: rawCity } = params;
    console.log("testing city", rawCity);
    
  const { city, isMeta, metanum, googel1num, internal  } = normalizeCityParams(rawCity);
  const filteredCity = useMemo(() => masterlp3.find((center) => center.center_name === city), [city]);
  const nearByCenters = useMemo(() => nearByAreas.find((center)=> center.center_name === city), [city]); 
  const { reviews: filteredReview, doctors: filteredDoctors, videos: cityVideos } =
    useMemo(() => getFilteredData(city, filteredCity), [city, filteredCity]);
  console.log("filltered city", filteredCity);
  return (
    <>
   
      <section className="relative overflow-y-auto">
        <header id="headerlp3" className='' >
    
          <MFHeader center={filteredCity} metanum={metanum} googel1num={googel1num}/>
        </header>

        <Suspense fallback={<MinimalLoader />}>
          <DynamicComponents.StickyButtonScreenlp3 center={filteredCity} />
        </Suspense>

        <main>

          <HeroMaleFertility center={filteredCity} isMeta={isMeta} internal={internal}  />

          <div className="mt-[20px] md:mt-0">
            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.MFStatisticsBanner />
            </Suspense>
          </div>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.MFTreatmentlp3 center={filteredCity} />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.MFSpeciaListslp3 isMeta={isMeta} internal={internal} />
            </Suspense>

            <section className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 lg:py-16 bg-[url(/images/lp/campaign/treatment_bg_img_cropped.png)] bg-repeat mb-10 lg:mb-16 relative">
            
              <Suspense fallback={<ComponentLoader />}>
                <DynamicComponents.MFReviewlp3
                  center={filteredCity}
                  filteredReview={filteredReview}
                />
              </Suspense>
              <Suspense fallback={<ComponentLoader />}>
                <DynamicComponents.MFTrustedCliniclp3 center={filteredCity} />
              </Suspense>
            </section>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Centerslp3 />
            </Suspense>

            {/* <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.ChooseOasislp3 center={filteredCity} />
            </Suspense> */}

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.MFAwardV2 />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.MFBestDoctorslp3
                center={filteredCity}
                filteredDoctors={filteredDoctors}
                isMeta={isMeta}
                internal={internal}
              />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.MFIVFClinicSliderlp3
                center={filteredCity}
                cityVideos={cityVideos}
              />
            </Suspense>


            {/* <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.PlanInfolp3 isMeta={isMeta} internal={internal} />
            </Suspense> */}

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.MFFaqlp3 />
            </Suspense>

           {/* {city != 'india' && <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.ExploreCenterslp3 nearByCenters={nearByCenters}/>
            </Suspense>} */}


            <Suspense fallback={<MinimalLoader />}>
              <DynamicComponents.FooterStickyButtonlp3 center={filteredCity} />
            </Suspense>
            </main>
            
             {/* testing */}
            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.FooterV2 />
            </Suspense>

            {!googel1num && <Suspense fallback={<MinimalLoader />}>
              <DynamicComponents.MFPhoneCall center={filteredCity} metanum={metanum} />
            </Suspense>}


          
        
      </section>
    </>
  );
});

Page.displayName = 'Page';

export default Page;
