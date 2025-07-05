import GetsinglePackage from "@/components/GetsinglePackage";
import PackageDetail from "./PackageDetail";
import FrontImage from "@/components/frontPage/FrontImage";
import { Suspense } from "react";
import { BASE_API_URL } from "../../../../utils/Url";
import DetailInfo from "./DetailInfo";
import { getMessages } from "next-intl/server";

export async function generateMetadata({ params: { locale, id } }) {
  const pack = await GetsinglePackage(locale, id);
  const messages = await getMessages({ locale });
  const detailMessages = messages?.Detail;
  const city = messages?.HomePage?.packages?.[`package${id}`]?.city;
  const description =
    messages?.HomePage?.packages?.[`package${id}`]?.description;

  return {
    title: detailMessages?.title
      ? `${detailMessages.title} ${city || "City"}`
      : "Default Title",
    description: description || "Default Description",
    openGraph: {
      title: detailMessages?.title
        ? `${detailMessages.title} ${city || "City"}`
        : "Default Title",
      description: description,
      url: `${BASE_API_URL}/${locale}/${id}`,
      images: [
        {
          url: pack?.packageimage,
          width: 800,
          height: 600,
          alt: "Og Image Alt",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: detailMessages?.title
        ? `${detailMessages.title} ${city || "City"}`
        : "Default Title",
      description: description,
      image: pack?.packageimage,
    },
    robots: "index, follow",
    keywords: "packes ,Travel, package, offer, tourist, booking, licience",
    author: "Petra",
  };
}

const page = async ({ params: { locale, id } }) => {
  if (!BASE_API_URL) {
    return null;
  }

  const pack = await GetsinglePackage(locale, id);

  const detaildataLoading = (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-400"></div>
      <h1>...Loading</h1>
    </div>
  );
  if (!pack) {
    return null;
  }
  return (
    <div
      style={{
        paddingBottom: "1rem",
        background:
          "linear-gradient(to right bottom, #f3e1c8, #6d2700, #f8aa4a, #d8b38a)",
      }}
    >
      <FrontImage
        image={"/pageImages/detail.jpg"}
        header1={"imgHeader"}
        header2={"imgTitle"}
        translateName={"Detail"}
      />
      <DetailInfo locale={locale} pack={pack} />

      <Suspense fallback={detaildataLoading}>
        <PackageDetail locale={locale} pack={pack} />
      </Suspense>
    </div>
  );
};
export default page;
