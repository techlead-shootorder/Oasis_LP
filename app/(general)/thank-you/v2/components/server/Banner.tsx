import Image from "next/image";

export default function Banner() {
    return (
        <div className="rounded-[25px] relative overflow-hidden mb-10 lg:mb-24">
            <div>
                <Image src="/images/bg_img_sm.png" width={1729} height={2301} alt="bg img" className="md:hidden xs:max-h-[400px] max-h-[430px]" />
                <Image src="/images/bg_img.png" width={1728} height={946} alt="bg img" className="hidden md:block max-h-[400px] lg:max-h-[550px]" />
            </div>
            <Image src="/images/thankyou/Subtract.png" width={1528} height={213} alt="subtract" className="absolute bottom-0 w-full h-auto" />
            <div className="flex flex-col md:flex-row items-center sm:gap-4 md:gap-10 xl:gap-16 absolute top-0 w-full">
                <Image src="/images/thankyou/baby-img.png" width={493} height={602} alt="baby img" className="w-[200px] md:w-[300px] lg:w-[400px] mx-auto" />
                <div className="md:w-[50%] lg:w-[55%] 2xl:w-[60%] text-center md:text-left md:ml-auto font-questrial">
                    <article>
                        <h1
                            className="text-primary text-[28px] md:text-4xl lg:text-5xl xl:text-[70px] 2xl:text-[80px] 3xl:text-[90px] leading-[1.1] tracking-wide">
                            Thank you for <br />
                            filling up the form!</h1>
                        <p className="text-base md:text-lg lg:text-2xl xl:text-[32px] leading-none mt-3 xl:mt-8 opacity-[0.6] lg:opacity-[1] text-center md:text-left max-w-[600px] px-4 md:px-0">
                            With science on your side, <br className="hidden sm:block" />
                            your dream is within reach, <br className="hidden sm:block" />
                            and we're with you all the way.</p>
                    </article>
                </div>
            </div>
        </div>
    )
}