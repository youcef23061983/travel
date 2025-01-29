import FrontImage from "@/components/frontPage/FrontImage";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["About"];

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
  };
}

export default function About() {
  const t = useTranslations("About");

  return (
    <div style={{ paddingBottom: "3rem" }}>
      <FrontImage
        image="/pageImages/about.jpg"
        header1="imgHeader"
        header2="imgTitle"
        translateName="About"
      />
      <p className="px-[10px] text-center mt-[40px]">{t("paragraph")}</p>
    </div>
  );
}
