import doctors from "@/util/lp/doctors";
import maleFertilityDoctors from "@/util/lp/maleFertilityDoctors";
import testimonials from "@/util/lp/testimonials";
import { cityToVideos, videos } from "@/util/lp/videos";



export const normalizeCityParams = (city) => {
// console.log("malefertility doctors", maleFertilityDoctors) 
  const isMetaGoogle = ['meta', 'google', 'internal', 'meta1', 'google1'].includes(city);
 
  return {
    city: isMetaGoogle ? 'india' : city,
    isMeta: ['meta1', 'google1'].includes(city),
    metanum: ['meta1', 'meta'].includes(city),
    googel1num: ['google1'].includes(city),
    internal: ['internal'].includes(city)
  };
};

export const getFilteredData = (city, filteredCity) => ({
  testimonials: doctors.filter(t => filteredCity?.id == t.master_id),
  reviews: testimonials.filter(t => filteredCity?.id == t.master_id),
  doctors: maleFertilityDoctors.filter(d => filteredCity?.id == d.master_id),
  videos: getVideosForCity(city)
});

const getVideosForCity = (city) => {
  const videoOrder = cityToVideos[city.toLowerCase()];
  if (!videoOrder) return [];
  return videoOrder.map(id => videos.find(video => parseInt(video.id) === id)).filter(Boolean);
};