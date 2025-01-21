import GetallPackages from "@/components/GetallPackages";
import GetsinglePackage from "@/components/GetsinglePackage";
import { generateMetadata } from "./generateMetadata";
import PackageDetail from "./PackageDetail";
import FrontImage from "@/components/frontPage/FrontImage";
import DetailSlider from "./DetailSlider";
import { Suspense } from "react";
import Detaildata from "./Detaildata";
import { BASE_API_URL } from "../../../../../utils/Url";

export { generateMetadata };
// export async function generateStaticParams({ params: { locale } }) {
//   return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
// }

export async function generateStaticParams({ params: { locale } }) {
  try {
    const packages = await GetallPackages(locale);

    if (!packages || packages.length === 0) {
      console.error("No packages found");
      return [];
    }

    const packs = packages.map((pack) => ({
      id: pack.id.toString(),
    }));

    console.log(`Generated static params:`, packs);
    return packs;
  } catch (error) {
    console.error(`Error in generateStaticParams for locale: ${locale}`, error);
    return [];
  }
}
export default async function page({ params: { locale, id } }) {
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
    return (
      <div className="flex items-center justify-center h-screen">
        <h1>Package not found</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        marginBottom: "1rem",
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
      <Suspense fallback={detaildataLoading}>
        <Detaildata pack={pack} />
      </Suspense>
      <PackageDetail locale={locale} />

      <DetailSlider />
    </div>
  );
}
