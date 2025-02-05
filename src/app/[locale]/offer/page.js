// import { getMessages } from "next-intl/server";
// import { BASE_API_URL } from "../../../../utils/Url";
// import { getServerSession } from "next-auth";
// import { options } from "../api/auth/[...nextauth]/options";
// import GetallPackages from "@/components/GetallPackages";
// import Packages from "./Packages";
// import FrontImage from "@/components/frontPage/FrontImage";
// import { redirect } from "next/navigation";

// export async function generateMetadata({ params: { locale } }) {
//   const messages = await getMessages({ locale });
//   const homePageMessages = messages["Offer"];
//   const title = homePageMessages ? homePageMessages.title : "Default Title";

//   const description = homePageMessages
//     ? homePageMessages.paragraph
//     : "Default Description";
//   const image = "/pageImages/groupoffer.jpg";

//   return {
//     title: homePageMessages ? homePageMessages.title : "Default Title",
//     openGraph: {
//       title: title,

//       description: description,
//       url: `${BASE_API_URL}/${locale}/offer`,
//       images: [
//         {
//           url: image,
//           width: 800,
//           height: 600,
//           alt: "Og Image Alt",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: title,

//       description: description,
//       image: image,
//     },
//     robots: "index, follow",
//     keywords: "packes ,Travel, package, offer, tourist, booking, licience",
//     author: "Petra",
//   };
// }

// const page = async ({ params: { locale } }) => {
//   if (!BASE_API_URL) {
//     return null;
//   }

//   const PackagesData = await GetallPackages(locale);
//   const session = await getServerSession(options);

//   if (!session) {
//     redirect(`/api/auth/signin?callbackUrl=/${locale}/offer`);
//   }

//   return (
//     <div style={{ paddingBottom: "3rem" }}>
//       <FrontImage
//         image={"/pageImages/groupoffer.jpg"}
//         header1={"imgHeader"}
//         header2={"imgTitle"}
//         translateName={"Offer"}
//       />

//       <Packages PackagesData={PackagesData} />
//     </div>
//   );
// };

// export default page;

import { getMessages } from "next-intl/server";
import { BASE_API_URL } from "../../../../utils/Url";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import GetallPackages from "@/components/GetallPackages";
import Packages from "./Packages";
import FrontImage from "@/components/frontPage/FrontImage";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const CRAWLER_USER_AGENTS = [
  "googlebot",
  "bingbot",
  "slurp",
  "duckduckbot",
  "baiduspider",
  "yandexbot",
  "facebot",
  "twitterbot",
];

// Function to check if the request is from a crawler
function isCrawler() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  return CRAWLER_USER_AGENTS.some((crawler) =>
    userAgent.toLowerCase().includes(crawler)
  );
}

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["Offer"];
  const title = homePageMessages ? homePageMessages.title : "Default Title";

  const description = homePageMessages
    ? homePageMessages.paragraph
    : "Default Description";
  const image = "/pageImages/groupoffer.jpg";

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
    openGraph: {
      title: title,

      description: description,
      url: `${BASE_API_URL}/${locale}/offer`,
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: "Og Image Alt",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,

      description: description,
      image: image,
    },
    robots: "index, follow",
    keywords: "packes ,Travel, package, offer, tourist, booking, licience",
    author: "Petra",
  };
}

const page = async ({ params: { locale } }) => {
  if (!BASE_API_URL) {
    return null;
  }

  const PackagesData = await GetallPackages(locale);
  const isCrawlerRequest = isCrawler();

  // If it's not a crawler, check authentication
  if (!isCrawlerRequest) {
    const session = await getServerSession(options);
    if (!session) {
      redirect(`/api/auth/signin?callbackUrl=/${locale}/offer`);
    }
  }
  return (
    <div style={{ paddingBottom: "3rem" }}>
      <FrontImage
        image={"/pageImages/groupoffer.jpg"}
        header1={"imgHeader"}
        header2={"imgTitle"}
        translateName={"Offer"}
      />

      <Packages PackagesData={PackagesData} />
    </div>
  );
};

export default page;
