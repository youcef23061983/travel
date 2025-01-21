// import { getMessages } from "next-intl/server";
// import FrontImage from "@/components/frontPage/FrontImage";
// import PartnersImages from "@/components/frontPage/PartnersImages";
// import TextScroll from "@/components/frontPage/TextScroll";
// import Partnership2 from "@/components/frontPage/Partnership2";
// import TextScroll2 from "@/components/frontPage/TextScroll2";
// import Statistics from "@/components/frontPage/Statistics";
// import TopPackageSlider from "@/components/frontPage/TopPackageSlider";
// import PopularPackagesSlider from "@/components/frontPage/PopularPackagesSlider";
// export async function generateMetadata({ params: { locale } }) {
//   const messages = await getMessages({ locale });
//   const homePageMessages = messages["HomePage"];

//   return {
//     title: homePageMessages ? homePageMessages.title : "Default Title",
//   };
// }

// export default function HomePage() {
//   return (
//     <div>
//       <FrontImage />
//       <TextScroll />

//       <PartnersImages />
//       <TextScroll2 />

//       <Partnership2 />
//       <Statistics />
//       <TopPackageSlider />
//       <PopularPackagesSlider />
//     </div>
//   );
// }

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

const HomePage = async ({ params: { locale } }) => {
  const PackagesData = await GetallPackages(locale);
  if (!BASE_API_URL) {
    return null;
  }

  return (
    <div>
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

export default HomePage;
