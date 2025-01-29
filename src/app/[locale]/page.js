import { getMessages } from "next-intl/server";
import FrontImage from "@/components/frontPage/FrontImage";
import PartnersImages from "@/components/frontPage/PartnersImages";
import TextScroll from "@/components/frontPage/TextScroll";
import Partnership2 from "@/components/frontPage/Partnership2";
import TextScroll2 from "@/components/frontPage/TextScroll2";
import Statistics from "@/components/frontPage/Statistics";
import Testimonials from "@/components/frontPage/Testimonials";
import TopPackageSlider from "@/components/frontPage/TopPackageSlider";
import PopularPackagesSlider from "@/components/frontPage/PopularPackagesSlider";
import GetallPackages from "@/components/GetallPackages";
import { BASE_API_URL } from "../../../utils/Url";

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });

  const homePageMessages = messages["HomePage"];

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
  };
}

const page = async ({ params: { locale } }) => {
  if (!BASE_API_URL) {
    return null;
  }

  const PackagesData = await GetallPackages(locale);
  console.log(PackagesData);

  return (
    <div style={{ paddingBottom: "3rem" }}>
      <FrontImage
        image={"/homepage/petra.jpg"}
        header1={"imgHeader"}
        header2={"imgTitle"}
        translateName={"HomePage"}
      />
      <TextScroll />
      <PartnersImages />
      <TextScroll2 />
      <Partnership2 />
      <Statistics />
      <TopPackageSlider PackagesData={PackagesData} />
      <PopularPackagesSlider PackagesData={PackagesData} />
      <Testimonials />
    </div>
  );
};

export default page;
