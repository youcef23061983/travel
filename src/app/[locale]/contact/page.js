import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["About"];

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
  };
}
const page = () => {
  const t = useTranslations("Contact");

  return (
    <div>
      <h1>{t("email")}</h1>
      <h1>{t("full name")}</h1>
    </div>
  );
};

export default page;
