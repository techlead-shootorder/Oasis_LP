import React, { memo } from "react";
import Image from "next/image";

// Constants
const STATISTICS = [
    {
        id: 'healthy-babies',
        icon: "/images/lp/campaign/ic-Healthy-Babies.webp",
        value: "1,00,000+",
        label: "Healthy Babies with IVF Treatment",
        alt: "Healthy Babies with IVF Treatment"
    },
    {
        id: 'success-rate',
        icon: "/images/lp/campaign/ic-Success-Rate.webp",
        value: "70% IVF",
        label: "Success Rate with Advanced Technology",
        alt: "Success Rate with Advanced Technology"
    },
    {
        id: 'expert-care',
        icon: "/images/lp/campaign/ic-expert-care.svg",
        value: "100% Expert Care",
        label: "Personalized IVF All Under One Roof",
        alt: "Personalized IVF All Under One Roof"
    },
    {
        id: 'centers',
        icon: "/images/lp/campaign/ic-centre.webp",
        value: "3,000+",
        label: "Gynecs Trust Oasis IVF",
        alt: "Gynecs Trust Oasis IVF"
    }
];

// Memoized StatItem component
const StatItem = memo(({ icon, value, label, alt }) => (
    <div className="flex flex-col items-center">
        <div className="flex items-center justify-center">
            <Image
                className="w-auto h-[30px] lg:h-[45px]"
                src={icon}
                alt={alt}
                width={80}
                height={80}
                loading="lazy"
                quality={90}
            />
            <h3 className="text-accent text-[16px] lg:text-[26px] 4xl:text-[30px] font-medium">
                {value}
            </h3>
        </div>
        <hr className="w-full border-[#9678B6] my-2" />
        <h3 className="text-primary text-sm lg:text-[20px] text-center leading-[1.1] font-bold">
            {label}
        </h3>
    </div>
));

// Add display name for better debugging
StatItem.displayName = 'StatItem';

// Main component
const Stats = () => (
    <div className="max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 mb-10 lg:mb-16">
         <h2 
         className="text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px] font-bold leading-tight text-primary text-center tracking-wide my-8"
         >
                Why Choose Oasis IVF
            </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-14 font-lato">
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

export default memo(Stats);