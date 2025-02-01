// import GetallPackages from "@/components/GetallPackages";
import GetsinglePackage from "@/components/GetsinglePackage";
import PackageDetail from "./PackageDetail";
import FrontImage from "@/components/frontPage/FrontImage";
import { Suspense } from "react";
import { BASE_API_URL } from "../../../../utils/Url";
import DetailInfo from "./DetailInfo";

export { generateMetadata } from "./generateMetadata";

// export async function generateStaticParams() {
//   const locales = ["en", "ar"];
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
