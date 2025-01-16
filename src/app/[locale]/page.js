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

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["HomePage"];

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
  };
}

async function getData(locale) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${locale}/api/packages`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const HomePage = async ({ params: { locale } }) => {
  const PackagesData = await getData(locale);

  return (
    <div>
      <FrontImage />
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
