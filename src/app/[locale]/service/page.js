import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["Service"];

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
  };
}
const page = () => {
  const t = useTranslations("Service");

  return (
    <div>
      <h1>{t("lease")}</h1>
      <h1>{t("booking")}</h1>
    </div>
  );
};

export default page;
