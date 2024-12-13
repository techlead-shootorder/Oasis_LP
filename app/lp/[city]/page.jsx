import React, { memo, useMemo, Suspense } from 'react';
import { normalizeCityParams, getFilteredData } from './helper';
import masterlp3 from "@/util/lp/masterlp3";
import dynamic from 'next/dynamic';

import HeaderTesting from "@/app/(landingpages)/components/Header/HeaderTesting";
import Herolp3 from "@/app/(landingpages)/components/Hero/Herolp3";

// const MinimalLoader = () => <div className="animate-pulse bg-gray-200 h-10" />;
const ComponentLoader = () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />;


// Dynamic components with single import pattern
const DynamicComponents = {
  // StickyButtonScreenlp3: dynamic(
  //   () => import('@/app/(landingpages)/components/StickyButtonScreen/StickyButtonScreenlp3'),
  //   { loading: () => <MinimalLoader /> }
  // ),
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
  const { city, isMeta, metanum } = normalizeCityParams(rawCity);
  const filteredCity = useMemo(() => masterlp3.find((center) => center.center_name === city), [city]);
  useMemo(() => getFilteredData(city, filteredCity), [city, filteredCity]);

  return (
    <>
      <section className="relative overflow-y-auto">
        <header id="headerlp3">
          <HeaderTesting center={filteredCity} metanum={metanum} />
        </header>

        {/* <Suspense fallback={<MinimalLoader />}>
        <DynamicComponents.StickyButtonScreenlp3 center={filteredCity} />
      </Suspense> */}

        <main>
          <Herolp3 center={filteredCity} isMeta={isMeta} />

          <div className="mt-[20px] md:mt-0">
            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.StatisticBannerV2 />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.Treatmentlp3 center={filteredCity} />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
              <DynamicComponents.SpeciaListslp3 isMeta={isMeta} />
            </Suspense>
          </div>
        </main>
      </section>
    </>
  );
});

Page.displayName = 'Page';

export default Page;
