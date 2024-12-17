import Image from "next/image"

export default function InfoSection() {
    return (
        <div className="mb-10 lg:mb-24">
            <div className="flex items-center gap-4">
                <h2 className="text-primary text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] !leading-[1.2]">
                    What's Next?</h2>
                <hr className="flex-1 border-[#9678B6]" />
            </div>

            <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 xl:gap-16 mt-10 font-lato">
                <div className="w-full xl:w-2/5">
                    <Image className="w-full h-full object-cover rounded-[12px]" src="/images/thankyou/s2_img_01.png"
                        alt="" width={644} height={388} />
                </div>
                <div className="w-full xl:w-3/5">
                    <h4 className="text-2xl xl:text-[32px] 2xl:text-4xl 3xl:text-[40px] font-normal leading-tight">Learn more about our fertility
                        treatments and find the one that's right for you</h4>
                    <p
                        className="mt-4 xl:mt-6">
                        For over 15 years, the fertility experts at Oasis Fertility have been helping couples struggling with infertility have healthy babies with personalized and science-based treatments. The wide range of male and female fertility treatments available at Oasis Fertility include IUI, IVF, ICSI, IVM, and MicroTESE. Along with the standard fertility treatments, Oasis Fertility also offers advanced testing methods such as PGT-A (Preimplantation Genetic Testing) and ERA (Endometrial Receptivity Array) to ensure that the treatment is successful and the babies are born healthy.</p>
                    <a className="inline-flex justify-center items-center px-4 xl:px-6 py-3 mt-6 xl:mt-8 rounded-[12px] bg-accent text-xs xl:text-xl font-semibold text-white uppercase"
                        href="/our-treatments">KNOW MORE</a>
                </div>
            </div>
        </div>
    )
}