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
    <div>
      <h1>{t("booking")}</h1>
      <p>{t("p")}</p>
    </div>
  );
}
