import getBlogsDetails from "@/assets/getBlogsData";
import { headers } from "next/headers";
import BlogSlider from "../component/client/BlogSlider";
import IVFSuccessStories from "../component/client/IVFSuccessStories";
import Banner from "./v2/components/server/Banner";
import InfoSection from "./v2/components/server/InfoSection";

export default async function ThankYou() {
    const blogData = await getBlogsDetails();
    const headersList = headers();
    const useragent = headersList.get('user-agent');
    const userAgentString = JSON.stringify(useragent);
    return (
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 xl:px-14 2xl:px-20">
            <Banner />
            <InfoSection />
            <IVFSuccessStories headerText="Read our success stories to see how we have helped others like you achieve their dreams" isDynamicButton={true} />
            <div className="mb-10 lg:mb-24">
                <BlogSlider userAgentString={userAgentString} blogData={blogData} isDynamicBlogs={true} />
            </div>
        </div>
    )
}