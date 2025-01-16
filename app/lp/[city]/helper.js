import doctors from "@/util/lp/doctors";
import newdoctorslp3 from "@/util/lp/newdoctorslp3";
import testimonials from "@/util/lp/testimonials";
import { cityToVideos, videos } from "@/util/lp/videos";

export const normalizeCityParams = (city) => {
 
  const isMetaGoogle = ['meta', 'google', 'internal', 'meta1', 'google1'].includes(city);
 
  return {
    city: isMetaGoogle ? 'india' : city,
    isMeta: ['meta1', 'google1'].includes(city),
    metanum: ['meta1', 'meta'].includes(city),
    internal: ['internal'].includes(city)
  };
};

export const getFilteredData = (city, filteredCity) => ({
  testimonials: doctors.filter(t => filteredCity?.id === t.master_id),
  reviews: testimonials.filter(t => filteredCity?.id === t.master_id),
  doctors: newdoctorslp3.filter(d => filteredCity?.id === d.master_id),
  videos: getVideosForCity(city)
});

const getVideosForCity = (city) => {
  const videoOrder = cityToVideos[city.toLowerCase()];
  if (!videoOrder) return [];
  return videoOrder.map(id => videos.find(video => parseInt(video.id) === id)).filter(Boolean);
};