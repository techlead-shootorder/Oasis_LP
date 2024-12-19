import React, { memo } from "react";
import Image from "next/image";

// Constants
const STATISTICS = [
    {
        id: 'healthy-babies',
        icon: "/images/lp/campaign/ic-Healthy-Babies.webp",
        value: "1,00,000+",
        label: "Healthy Babies",
        alt: "Healthy Babies"
    },
    {
        id: 'success-rate',
        icon: "/images/lp/campaign/ic-Success-Rate.webp",
        value: "69% IVF",
        label: "Success Rate Across India",
        alt: "Success Rate Across India"
    },
    {
        id: 'microtese',
        icon: "/images/lp/campaign/ic-MicroTESE.webp",
        value: "1000+ Cases",
        label: "MicroTESE Solving Male Infertility",
        alt: "MicroTESE Solving Male Infertility"
    },
    {
        id: 'centers',
        icon: "/images/lp/campaign/ic-centre.webp",
        value: "32 Centres",
        label: "Across India",
        alt: "Across India"
    }
];

// Memoized StatItem component
const StatItem = memo(({ icon, value, label, alt }) => (
    <div className="flex flex-col items-center">
        <div className="flex items-center justify-center">
            <Image
                className="w-auto h-[37px] lg:h-[60px]"
                src={icon}
                alt={alt}
                width={80}
                height={80}
                loading="lazy"
                quality={90}
            />
            <h3 className="text-accent text-[18px] lg:text-[30px] 4xl:text-[40px] font-medium">
                {value}
            </h3>
        </div>
        <hr className="w-full border-[#9678B6] my-2" />
        <h3 className="text-primary text-sm lg:text-[26px] text-center leading-[1.1]">
            {label}
        </h3>
    </div>
));

// Add display name for better debugging
StatItem.displayName = 'StatItem';

// Main component
const StatisticBannerV2 = () => (
    <div className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 mb-10 lg:mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-14 font-lato">
            {STATISTICS.map(stat => (
                <StatItem
                    key={stat.id}
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                    alt={stat.alt}
                />
            ))}
        </div>
    </div>
);

export default memo(StatisticBannerV2);