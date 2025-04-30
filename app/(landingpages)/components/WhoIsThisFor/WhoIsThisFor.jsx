'use client';
import { Users, Megaphone, Target } from 'lucide-react';

export default function WhoIsThisFor() {
  const items = [
    {
      icon: <Users className="text-orange-500 w-8 h-8 md:w-10 md:h-10" />,
      text: "Couples Planning For A Baby",
    },
    {
      icon: <Megaphone className="text-orange-500 w-8 h-8 md:w-10 md:h-10" />,
      text: "Anyone Who Wants Fertility Health Check Up",
    },
    {
      icon: <Target className="text-orange-500 w-8 h-8 md:w-10 md:h-10" />,
      text: "Couples Facing Infertility",
    },
  ];

  return (
    <section className='max-w-screen-4xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20 mb-10 lg:mb-16 py-6 lg:py-8 '>
      
      <h2 className=" text-[22px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[52px]  font-bold text-primary text-center tracking-wide mb-10">
        Who Is This For
   </h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 max-w-xs">
              <div>{item.icon}</div>
              <p className="text-sm md:text-lg text-gray-800 font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      
    </section>
  );
}
