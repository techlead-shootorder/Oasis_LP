
import React, { memo, useMemo, Suspense } from 'react';
import { normalizeCityParams, getFilteredData } from './helper';
import masterlp3 from "@/util/lp/masterlp3";
import nearByAreas from "@/util/lp/nearByAreas"
import dynamic from 'next/dynamic';

import HeaderTesting from "@/app/(landingpages)/components/Header/HeaderTesting";
import Herolp3 from "@/app/(landingpages)/components/Hero/Herolp3";
import IVFPopup from '@/app/(landingpages)/components/IVFPopup/IVFPopup';

const MinimalLoader = () => <div className="animate-pulse bg-gray-200 h-10" />;
const ComponentLoader = () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />;


// Dynamic components with single import pattern
const DynamicComponents = {
  StickyButtonScreenlp3: dynamic(
    () => import('@/app/(landingpages)/components/StickyButtonScreen/StickyButtonScreenlp3'),
    { loading: () => <MinimalLoader /> }
  ),
  
  StatisticBannerV2: dynamic(
    () => import('@/app/(landingpages)/components/Hero/StatisticsBannerV2'),
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
  Reviewlp3: dynamic(
    () => import('@/app/(landingpages)/components/Review/Reviewlp3'),
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
  BestDoctorslp3: dynamic(
    () => import('@/app/(landingpages)/components/BestDoctors/BestDoctorslp3'),
    { loading: () => <ComponentLoader /> }
  ),
  Gallery: dynamic(
    () => import('@/app/(landingpages)/components/Gallery/Gallery'),
    { loading: () => <ComponentLoader /> }
  ),
  IVFClinicSliderlp3: dynamic(
    () => import('@/app/(landingpages)/components/IVFClinicSlider/IVFClinicSliderlp3'),
    { loading: () => <ComponentLoader /> }
  ),
  PlanInfolp3: dynamic(
    () => import('@/app/(landingpages)/components/PlanInfo/PlanInfolp3'),
    { loading: () => <ComponentLoader /> }
  ),
  Faqlp3: dynamic(
    () => import('@/app/(landingpages)/components/Faq/Faqlp3'),
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
  PhoneCall: dynamic(
    () => import('@/app/(landingpages)/components/PhoneCall/PhoneCall'),
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
  const { city, isMeta, metanum, googel1num, internal  } = normalizeCityParams(rawCity);
  const filteredCity = useMemo(() => masterlp3.find((center) => center.center_name === city), [city]);
  const nearByCenters = useMemo(() => nearByAreas.find((center)=> center.center_name === city), [city]); 
  const { reviews: filteredReview, doctors: filteredDoctors, videos: cityVideos } =
    useMemo(() => getFilteredData(city, filteredCity), [city, filteredCity]);
// City page test
  return (
    <>
      <section className="relative overflow-y-auto">
        <header id="headerlp3">
          <HeaderTesting center={filteredCity} metanum={metanum} googel1num={googel1num}/>
        </header>

           {/* IVF Popup that appears after 10 seconds */}
          <IVFPopup />

        <Suspense fallback={<MinimalLoader />}>
          <DynamicComponents.StickyButtonScreenlp3 center={filteredCity} />
        </Suspense>




        <main>

          <Herolp3 center={filteredCity} isMeta={isMeta} internal={internal}  />

          <div className="mt-[20px] md:mt-0">
            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.StatisticBannerV2 />
            </Suspense>
          </div>

          <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.BestDoctorslp3
                center={filteredCity}
                filteredDoctors={filteredDoctors}
                isMeta={isMeta}
                internal={internal}
              />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Gallery
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

           
            
            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Reviewlp3
                center={filteredCity}
                filteredReview={filteredReview}
              />
            </Suspense>
            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.TrustedCliniclp3 center={filteredCity} />
            </Suspense>
      

          
          <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.AwardV2 />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Centerslp3 center={filteredCity}/>
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.SpeciaListslp3 isMeta={isMeta} internal={internal} />
            </Suspense>

           

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Treatmentlp3 center={filteredCity} />
            </Suspense>

            {/* <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.PlanInfolp3 isMeta={isMeta} internal={internal} />
            </Suspense> */}

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Faqlp3 />
            </Suspense>

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
              <DynamicComponents.PhoneCall center={filteredCity} metanum={metanum} />
            </Suspense>}
               
      </section>
    </>
  );
});

Page.displayName = 'Page';

export default Page;
