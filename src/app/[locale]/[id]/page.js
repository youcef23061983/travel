// import GetallPackages from "@/components/GetallPackages";
// import GetsinglePackage from "@/components/GetsinglePackage";
// import { useTranslations } from "next-intl";
// import { getMessages } from "next-intl/server";

// export async function generateMetadata({ params: { locale, id } }) {
//   const messages = await getMessages({ locale });
//   const detailMessages = messages["Detail"];
//   const t = useTranslations(`package${id}`);

//   return {
//     title: detailMessages
//       ? `${detailMessages.title} ${t("city")}`
//       : "Default Title",
//   };
// }
// export async function generateStaticParams() {
//   const packages = await GetallPackages();
//   return packages.map((pack) => ({
//     id: pack.id,
//   }));
// }

// export default async function Page({ params: { locale, id } }) {
//   const pack = await GetsinglePackage(locale, id);

//   return (
//     <div>
//       <h1>{pack.price}</h1>
//     </div>
//   );
// }
import GetallPackages from "@/components/GetallPackages";
import GetsinglePackage from "@/components/GetsinglePackage";
import { generateMetadata } from "./generateMetadata";
import PackageDetail from "./PackageDetail";

export { generateMetadata };

export async function generateStaticParams() {
  const packages = await GetallPackages();
  return packages.map((pack) => ({
    id: pack.id,
  }));
}

export default async function Page({ params: { locale, id } }) {
  const pack = await GetsinglePackage(locale, id);

  return (
    <div>
      <h1>Package Details</h1>
      <PackageDetail locale={locale} pack={pack} />
    </div>
  );
}
