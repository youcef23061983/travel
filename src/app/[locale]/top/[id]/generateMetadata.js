import { getMessages } from "next-intl/server";

export async function generateMetadata({ params: { locale, id } }) {
  const messages = await getMessages({ locale });
  const detailMessages = messages?.Detail;
  const city = messages?.HomePage?.packages?.[`package${id}`]?.city;

  return {
    title: detailMessages?.title
      ? `${detailMessages.title} ${city || "City"}`
      : "Default Title",
  };
}
