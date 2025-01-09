import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import FrontImage from "@/components/frontPage/FrontImage";
import PartnersImages from "@/components/frontPage/PartnersImages";
import TextScroll from "@/components/frontPage/TextScroll";
import Partnership2 from "@/components/frontPage/Partnership2";
import TextScroll2 from "@/components/frontPage/TextScroll2";
import Statistics from "@/components/frontPage/Statistics";
import Word from "@/components/Word";
export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["HomePage"];

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
  };
}

export default function HomePage() {
  return (
    <div>
      <FrontImage />
      <TextScroll />

      <PartnersImages />
      <TextScroll2 />

      <Partnership2 />
      <Statistics />
    </div>
  );
}
