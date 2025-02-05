import { getMessages } from "next-intl/server";
import { BASE_API_URL } from "../../../../utils/Url";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import GetallPackages from "@/components/GetallPackages";
import Packages from "./Packages";
import FrontImage from "@/components/frontPage/FrontImage";
import { redirect } from "next/navigation";

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["Offer"];
  const image = "/pageImages/groupoffer.jpg";
  paragraph;
  const description = homePageMessages
    ? homePageMessages.paragraph
    : "Default Description";

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
// export async function generateStaticParams() {
//   const locales = ["en", "ar"]; // Define your locales here
//   const params = [];

//   for (const locale of locales) {
//     const response = await fetch(`${BASE_API_URL}/${locale}/api/packages`);
//     if (!response.ok) {
//       throw new Error(
//         `Failed to fetch packages for locale ${locale}: ${response.status} ${response.statusText}`
//       );
//     }
//     const packages = await response.json();

//     const localeParams = packages.map((pack) => ({
//       locale,
//       id: pack.id,
//     }));

//     params.push(...localeParams);
//   }
//   return params;
// }

const page = async ({ params: { locale } }) => {
  if (!BASE_API_URL) {
    return null;
  }

  const PackagesData = await GetallPackages(locale);
  const session = await getServerSession(options);

  if (!session) {
    redirect(`/api/auth/signin?callbackUrl=/${locale}/offer`);
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
