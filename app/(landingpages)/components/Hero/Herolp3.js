import React, { Suspense } from "react";
import Image from "next/image";
import LeadFormV2 from "../LeadForm/LeadFormV2";
import LeadFormlp3Meta from "../LeadForm/LeadFormlp3Meta";

const HeroV2 = ({ center, service, isMeta}) => {

  console.log("center name", center.center_name);

  return (
    <>
      <section id="herolp3" className="bg-[#fde9f2] relative max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 md:mb-6 lg:mb-10">
        <div>


          <h1 id="heroBannerHeading" className="absolute text-[26px] top-[72px] left-0 md:text-[26px] lg:text-4xl xl:text-5xl md:top-12 md:left-[24px] lg:left-[40px] xl:left-[60px] 2xl:left-[100px] z-10 font-semibold text-primary py-2 text-center md:text-left w-full md:w-auto">

            Best <span className={service != 'fertility' ? 'uppercase' : ''}>{service ? service : "IVF"}</span> Clinic in{" "}
            {center?.center_name_heading
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </h1>

          <div className="">

            <Image
              className="w-full object-cover absolute left-0 top-0 hidden md:block h-full"
              src="/images/lp/lp3/Updated Desktop Banner.webp"
              alt="Banner1"
              width={1728}
              height={787}
              priority // preload the image
              loading="eager"
              style={{ objectPosition: "25% 0" }} // 25% from the left
            />
            <Image
              className="w-full object-cover absolute left-0 top-6 md:hidden h-full"
              src="/images/lp/lp3/Mobile Banner.webp"
              alt="Banner1"
              width={428}
              height={452}
              priority // preload the image
              loading="eager"
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
            />

          </div>





          {/* <div
            className="w-full h-full absolute left-0 bottom-0 hidden md:block"
            style={{
              background:
                "linear-gradient(265deg, rgba(119, 84, 93, 0) 0%, rgba(135,68,135,0.538) 63%)",
            }}
          ></div> */}
          {/* <div
            className="w-full h-full absolute left-0 bottom-0 md:hidden"
            style={{
              background:
                "linear-gradient(265deg, rgba(119, 84, 93, 0) 0%, rgba(135, 68, 135, 0.538) 73%)",
            }}
          ></div> */}
        </div>
        <div className="relative pt-24 pb-14 sm:py-14 lg:py-16 xl:py-18 2xl:py-24 flex items-end justify-between h-full ">

          <article className="invisible">
            <h1 className="font-lato font-medium text-white text-5xl xl:text-6xl 2xl:text-[78px] 3xl:text-[115px] leading-[1.1]">
              Best IVF <br /> Clinic in India
            </h1>
            <p className="text-2xl lg:text-[40px] text-white font-lato mt-3 leading-[1.1]">
              Your Journey to <br /> Parenthood Starts Here
            </p>
            <div className="mt-7 px-3 xl:px-5 py-5 font-lato rounded-md text-xs xl:text-xl 2xl:text-2xl font-semibold bg-primary uppercase shadow-[0px_0px_10px_5px_rgba(255,129,0,0.4)] lg:shadow-[0px_0px_15px_10px_rgba(255,129,0,0.4)]">
              <span className="inline-flex gap-2 items-center text-white">
                {" "}
                <span className="text-5xl lg:text-6xl 2xl:text-[78px]">
                  FREE
                </span>
                <span className="h-[40px] lg:h-[60px] border-l-2 border-gray-300"></span>
                <span className="text-lg lg:text-2xl 2xl:text-3xl">
                  CONSULTATION <br />
                  REGISTRATION
                </span>
              </span>
            </div>
          </article>
          <div className="hidden md:block md:mr-[0px] lg:mr-[50px] xl:mr-[100px] relative z-50">
            <Suspense>
              {isMeta ? <LeadFormlp3Meta center={center} service={service} /> : <LeadFormV2 center={center} service={service} />}
            </Suspense>
          </div>
        </div>
      </section>
      {/* <div className="max-w-screen-2xl mx-auto px-4 py-8 rounded-3xl bg-[url(https://images.oasisindia.in/website/lp/campaign/treatment_bg.png)] bg-cover bg-center md:hidden mb-10"> */}
      {/* <div id="leadformlp3" className="md:hidden flex items-center absolute top-[366px] mb-10 w-full "> */}
      <div id="leadformlp3" className="md:hidden flex items-center -mt-[80px] w-full ">

        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center w-full">
            <div className="bg-[#bf64bf] text-white w-[80%] text-center py-0.5 rounded-t-2xl font-semibold z-50"> IVF @ 94,999* &nbsp; | &nbsp; LIMITED VALIDITY</div>
          </div>
          <div className="w-[90%]">
            <Suspense>
              {isMeta ? <LeadFormlp3Meta center={center} service={service} /> : <LeadFormV2 center={center} service={service} />}
            </Suspense>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default HeroV2;