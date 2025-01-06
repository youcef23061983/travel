import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["Offer"];

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
  };
}
const page = () => {
  const t = useTranslations("Offer");

  return (
    <div>
      <h1>{t("country")}</h1>
      <h1>{t("period")}</h1>
    </div>
  );
};

export default page;
