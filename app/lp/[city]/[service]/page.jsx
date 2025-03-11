// import doctors from "@/util/lp/doctors";
import masterlp3 from "@/util/lp/masterlp3";
import newdoctorslp3 from "@/util/lp/newdoctorslp3";
import testimonials from "@/util/lp/testimonials";
import nearByAreas from "@/util/lp/nearByAreas";
import { cityToVideos, videos } from "@/util/lp/videoTestimonial";
import dynamic from 'next/dynamic';


import HeaderTesting from "@/app/(landingpages)/components/Header/HeaderTesting";

import Herolp3 from "../../../(landingpages)/components/Hero/Herolp3";
import { useMemo } from "react";
import Gallery from "@/app/(landingpages)/components/Gallery/Gallery";


// const StickyButtonScreenlp3 = dynamic(() => import('../../../(landingpages)/components/StickyButtonScreen/StickyButtonScreenlp3'), {
//     ssr: true,
// });

const FooterStickyButtonlp3 = dynamic(() => import('../../../(landingpages)/components/FooterStickyButtons/FooterStickyButtonlp3'), {
    ssr: true,
});

const StatisticBannerV2 = dynamic(() => import('../../../(landingpages)/components/Hero/StatisticsBannerV2'), {
    ssr: true,
});

const Treatmentlp3 = dynamic(() => import('../../../(landingpages)/components/Treatment/Treatmentlp3'), {
    ssr: true,
});

// const PlanInfolp3 = dynamic(() => import('../../../(landingpages)/components/PlanInfo/PlanInfolp3'), {
//     ssr: true,
// });

// const ChooseOasislp3 = dynamic(() => import('../../../(landingpages)/components/ChooseOasis/ChooseOasislp3'), {
//     ssr: true,
// });

const SpeciaListslp3 = dynamic(() => import('../../../(landingpages)/components/Specialists/SpeciaListslp3'), {
    ssr: true,
});

const BestDoctorslp3 = dynamic(() => import('../../../(landingpages)/components/BestDoctors/BestDoctorslp3'), {
    ssr: true,
});

const IVFClinicSliderlp3 = dynamic(() => import('../../../(landingpages)/components/IVFClinicSlider/IVFClinicSliderlp3'), {
    ssr: true,
});


const Reviewlp3 = dynamic(() => import('../../../(landingpages)/components/Review/Reviewlp3'), {
    ssr: true,
});

const TrustedCliniclp3 = dynamic(() => import('../../../(landingpages)/components/TrustedClinic/TrustedCliniclp3'), {
    ssr: true,
});

const Centerslp3 = dynamic(() => import('../../../(landingpages)/components/Centers/Centerslp3'), {
    ssr: true,
});

const AwardV2 = dynamic(() => import('../../../(landingpages)/components/Award/AwardV2'), {
    ssr: true,
});

const Faqlp3 = dynamic(() => import('../../../(landingpages)/components/Faq/Faqlp3'), {
    ssr: true,
});

const ExploreCenterslp3 = dynamic(() => import('../../../(landingpages)/components/Centers/ExploreCenterslp3'), {
    ssr: true,
})

const FooterV2 = dynamic(() => import('../../../(landingpages)/components/Footer/FooterV2'), {
    ssr: true,
});

const PhoneCall = dynamic(() => import('../../../(landingpages)/components/PhoneCall/PhoneCall'), {
    ssr: true,
});

export async function generateStaticParams() {
    const services = ["ivf", "iui", "fertility"];
    const params = [];

    masterlp3.forEach((item) => {
        services.forEach((service) => {
            params.push({ city: item.center_name, service });
        });
    });

    return params;
}

export async function generateMetadata({ params }) {
    // read route params
    let { city, service } = params;
  
    if (city == 'meta' || city == 'google' || city == 'meta1' || city == 'google1') {
        city = 'india';

    }
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
    const pageTitle = `Oasis ${capitalizedCity} | Top ${service?.toUpperCase()} Clinic in ${capitalizedCity}`;
    const pageDescription = `Best IVF clinic in ${capitalizedCity} offering top fertility treatments and services. Highest IVF success rate, affordable IVF cost & 1,00,000+ happy couples.`;

    return {
        title: pageTitle,
        description: pageDescription
    }
}

export default function Page({ params }) {
    let { city, service } = params;
    let isMeta = false;
    let metanum = false;
      let isGoogle = city == 'google1'
    if (city == 'meta' || city == 'google' || city == 'meta1' || city == 'google1') {
        if (city == 'meta1' || city == 'google1') {
            isMeta = true;
        }
        if (city == 'meta1' || city == 'meta') {
            metanum = true;
        }
        city = 'india';
    }
    const nearByCenters = useMemo(() => nearByAreas.find((center)=> center.center_name === city), [city]); 
   
    const filteredCity = masterlp3.find((center) => center.center_name === city);
    // const filteredTestimonials = doctors.filter((testimonial) => {
    //     return filteredCity?.id === testimonial.master_id;
    // });
    const filteredReview = testimonials.filter((testimonial) => {
        return filteredCity.id === testimonial.master_id;
    });
    const filteredDoctors = newdoctorslp3.filter((doctor) => {
        return filteredCity?.id === doctor.master_id;
    })



    // Function to get videos for a city
    function   getVideosForCity(city) {
        const videoOrder = cityToVideos[city.toLowerCase()];

        if (!videoOrder) {
            console.error("No videos mapped for this city!");
            return [];
        }

        // Filter and sort videos based on the defined order
        return videoOrder.map(id => videos.find(video => parseInt(video.id) === id)).filter(Boolean);
    }

    const cityVideos = getVideosForCity(city);

    console.log("city videos", cityVideos);

   

    return (
        <div className="relative overflow-y-auto">

            <header id="headerlp3" className="">
                <HeaderTesting center={filteredCity} metanum={metanum} googel1num={isGoogle}/>
            </header>
            {/* <StickyButtonScreenlp3 center={filteredCity} /> */}
            <main>
                <Herolp3 center={filteredCity} service={service} isMeta={isMeta} />
                <div className={`mt-[20px] md:mt-0`}>
                    <StatisticBannerV2 />
                </div>
                <BestDoctorslp3 center={filteredCity} filteredDoctors={filteredDoctors} isMeta={isMeta} service={service} />
                <Gallery center={filteredCity} filteredDoctors={filteredDoctors} isMeta={isMeta} service={service} />

                

                <IVFClinicSliderlp3 center={filteredCity} cityVideos={cityVideos} service={service} />
                {/* <section className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 py-10 lg:py-16 bg-[url(/images/lp/campaign/treatment_bg_img_cropped.png)] bg-repeat mb-10 lg:mb-16 relative"> */}
                {/* </section> */}
                    <Reviewlp3 center={filteredCity} filteredReview={filteredReview} service={service} />
                    <TrustedCliniclp3 center={filteredCity} service={service} />
                <AwardV2 service={service} />
                <Centerslp3 />
                <SpeciaListslp3 service={service} isMeta={isMeta} />

                <Treatmentlp3 center={filteredCity} service={service} />
                <Faqlp3 />
                
                {/* <ChooseOasislp3 center={filteredCity} /> */}
                
                {/* <PlanInfolp3 isMeta={isMeta} /> */}

                {city != 'india' && <ExploreCenterslp3 nearByCenters={nearByCenters} />}
                <FooterStickyButtonlp3 center={filteredCity} />
            </main>

            <FooterV2 />




            {/* WHATSAPP ICON */}
            {/* <div className=" fixed bottom-[140px] right-3 md:bottom-3">
        <Link
          href={`https://api.whatsapp.com/send/?phone=7992979929&text&app_absent=0`}
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://images.oasisindia.in/website/ic-whatsapp2.png"
            alt="whatsapp-icon.png"
            className="w-14 h-14"
            width={73}
            height={73}
          />
        </Link>
      </div> */}

           {!isGoogle && <PhoneCall center={filteredCity} />}





        </div>
    );
}
