
import React, { memo, useMemo, Suspense } from 'react';
import { normalizeCityParams, getFilteredData } from '../../[city]/helper';
import masterlp3 from "@/util/lp/masterlp3";
import nearByAreas from "@/util/lp/nearByAreas"
import dynamic from 'next/dynamic';

import HeaderDoctor from "@/app/(landingpages)/components/Header/HeaderDoctor";
import HeroDoctor from "@/app/(landingpages)/components/Hero/HeroDoctor";

const MinimalLoader = () => <div className="animate-pulse bg-gray-200 h-10" />;
const ComponentLoader = () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />;


// Dynamic components with single import pattern
const DynamicComponents = {
  StickyButtonScreenlp3: dynamic(
    () => import('@/app/(landingpages)/components/StickyButtonScreen/StickyButtonScreenlp3'),
    { loading: () => <MinimalLoader /> }
  ),

    DescriptionDoctor: dynamic(
    () => import('@/app/(landingpages)/components/DoctorlpComponents/Description/DescriptionDoctor'),
    { loading: () => <ComponentLoader /> }
  ),

  ExpertiseDoctor: dynamic(
    () => import('@/app/(landingpages)/components/Expertise/ExpertiseDoctor'),
    { loading: () => <ComponentLoader /> }
  ),

  SuccessStories: dynamic(
    () => import('@/app/(landingpages)/components/DoctorlpComponents/SuccessStories/SuccessStories'),
    { loading: () => <ComponentLoader /> }
  ),

  Review: dynamic(
    () => import('@/app/(landingpages)/components/DoctorlpComponents/Review/Review'),
    { loading: () => <ComponentLoader /> }
  ),
  TrustedClinic: dynamic(
    () => import('@/app/(landingpages)/components/DoctorlpComponents/TrustedClinic/TrustedClinic'),
    { loading: () => <ComponentLoader /> }
  ),
  PeopleStories : dynamic(
    () => import('@/app/(landingpages)/components/DoctorlpComponents/PeopleStories/PeopleStories'),
    { loading: () => <ComponentLoader /> }
  ),
  Media : dynamic(
    () => import('@/app/(landingpages)/components/DoctorlpComponents/Media/Media'),
    { loading: () => <ComponentLoader /> }
  ),
  Timings : dynamic(
    () => import('@/app/(landingpages)/components/DoctorlpComponents/Timings/Timings'),
    { loading: () => <ComponentLoader /> }
  ),
  Influencer : dynamic(
    () => import('@/app/(landingpages)/components/DoctorlpComponents/Influencer/Influencer'),
    { loading: () => <ComponentLoader /> }
  ),
//   StatisticBannerV2: dynamic(
//     () => import('@/app/(landingpages)/components/Hero/StatisticsBannerV2'),
//     { loading: () => <ComponentLoader /> }
//   ),
//   Treatmentlp3: dynamic(
//     () => import('@/app/(landingpages)/components/Treatment/Treatmentlp3'),
//     { loading: () => <ComponentLoader /> }
//   ),
//   SpeciaListslp3: dynamic(
//     () => import('@/app/(landingpages)/components/Specialists/SpeciaListslp3'),
//     { loading: () => <ComponentLoader /> }
//   ),
  Reviewlp3: dynamic(
    () => import('@/app/(landingpages)/components/Review/Reviewlp3'),
    { loading: () => <ComponentLoader /> }
  ),
//   TrustedCliniclp3: dynamic(
//     () => import('@/app/(landingpages)/components/TrustedClinic/TrustedCliniclp3'),
//     { loading: () => <ComponentLoader /> }
//   ),
//   Centerslp3: dynamic(
//     () => import('@/app/(landingpages)/components/Centers/Centerslp3'),
//     { loading: () => <ComponentLoader /> }
//   ),
//   ChooseOasislp3: dynamic(
//     () => import('@/app/(landingpages)/components/ChooseOasis/ChooseOasislp3'),
//     { loading: () => <ComponentLoader /> }
//   ),
  AwardV2: dynamic(
    () => import('@/app/(landingpages)/components/Award/AwardV2'),
    { loading: () => <ComponentLoader /> }
  ),
//   BestDoctorslp3: dynamic(
//     () => import('@/app/(landingpages)/components/BestDoctors/BestDoctorslp3'),
//     { loading: () => <ComponentLoader /> }
//   ),
//   IVFClinicSliderlp3: dynamic(
//     () => import('@/app/(landingpages)/components/IVFClinicSlider/IVFClinicSliderlp3'),
//     { loading: () => <ComponentLoader /> }
//   ),
//   PlanInfolp3: dynamic(
//     () => import('@/app/(landingpages)/components/PlanInfo/PlanInfolp3'),
//     { loading: () => <ComponentLoader /> }
//   ),
  Faqlp3: dynamic(
    () => import('@/app/(landingpages)/components/Faq/Faqlp3'),
    { loading: () => <ComponentLoader /> }
  ),
//   ExploreCenterslp3: dynamic(
//     () => import('@/app/(landingpages)/components/Centers/ExploreCenterslp3'),
//     { loading: () => <ComponentLoader /> }
//   ),
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

// export async function generateStaticParams() {
//   const params = [];

//   masterlp3.forEach((item) => {
//     params.push({ city: item.center_name });
//   });

//   return params;
// }


const Page = memo(({ params }) => {
//   const { city: rawCity } = params;
//   const { city, isMeta, metanum, internal } = normalizeCityParams(rawCity);
//   const filteredCity = useMemo(() => masterlp3.find((center) => center.center_name === city), [city]);
//   const nearByCenters = useMemo(() => nearByAreas.find((center)=> center.center_name === city), [city]); 
//   const { reviews: filteredReview, doctors: filteredDoctors, videos: cityVideos } =
//     useMemo(() => getFilteredData(city, filteredCity), [city, filteredCity]);

  return (
    <>
      <section className="relative overflow-y-auto">
        <header id="headerlp3">
          <HeaderDoctor  />
        </header>

        <Suspense fallback={<MinimalLoader />}>
          <DynamicComponents.StickyButtonScreenlp3 />
        </Suspense>

        <main>

          <HeroDoctor  />

          <div className="">
            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.DescriptionDoctor />
            </Suspense>
          </div>

          
            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.ExpertiseDoctor />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.SuccessStories />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Review />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.TrustedClinic />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.PeopleStories />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Media />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.AwardV2 />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Timings />
            </Suspense>
         
            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Influencer />
            </Suspense>

          {/* <div className="mt-[20px] md:mt-0">
            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.StatisticBannerV2 />
            </Suspense>
          </div> */}

            {/* <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Treatmentlp3 center={filteredCity} />
            </Suspense> */}

            {/* <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.SpeciaListslp3 isMeta={isMeta} internal={internal} />
            </Suspense> */}

            {/* <section className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 lg:py-16 bg-[url(/images/lp/campaign/treatment_bg_img_cropped.png)] bg-repeat mb-10 lg:mb-16 relative">
            
              <Suspense fallback={<ComponentLoader />}>
                <DynamicComponents.Reviewlp3
                  center={filteredCity}
                  filteredReview={filteredReview}
                />
              </Suspense>
              <Suspense fallback={<ComponentLoader />}>
                <DynamicComponents.TrustedCliniclp3 center={filteredCity} />
              </Suspense>
            </section> */}

            {/* <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Centerslp3 />
            </Suspense> */}

            {/* <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.ChooseOasislp3 center={filteredCity} />
            </Suspense> */}

            

           

            {/* <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.BestDoctorslp3
                center={filteredCity}
                filteredDoctors={filteredDoctors}
                isMeta={isMeta}
                internal={internal}
              />
            </Suspense> */}

            {/* <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.IVFClinicSliderlp3
                center={filteredCity}
                cityVideos={cityVideos}
              />
            </Suspense> */}


            {/* <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.PlanInfolp3 isMeta={isMeta} internal={internal} />
            </Suspense> */}

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Faqlp3 />
            </Suspense>

           {/* {city != 'india' && <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.ExploreCenterslp3 nearByCenters={nearByCenters}/>
            </Suspense>} */}


            <Suspense fallback={<MinimalLoader />}>
              <DynamicComponents.FooterStickyButtonlp3 />
            </Suspense>
            </main>
            
             {/* testing */}
            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.FooterV2 />
            </Suspense>

            <Suspense fallback={<MinimalLoader />}>
              <DynamicComponents.PhoneCall />
            </Suspense>


          
        
      </section>
    </>
  );
});

Page.displayName = 'Page';

export default Page;
