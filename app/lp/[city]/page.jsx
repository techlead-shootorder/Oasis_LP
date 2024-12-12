import React, { memo, useMemo } from 'react';
import { normalizeCityParams, getFilteredData } from './helper';
import masterlp3 from "@/util/lp/masterlp3";

import HeaderTesting from "@/app/(landingpages)/components/Header/HeaderTesting";
import Herolp3 from "@/app/(landingpages)/components/Hero/Herolp3";


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
        <main>
          <Herolp3 center={filteredCity} isMeta={isMeta} />
        </main>
      </section>
    </>
  );
});

Page.displayName = 'Page';

export default Page;
