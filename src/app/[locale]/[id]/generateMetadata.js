import { getMessages } from "next-intl/server";
import { BASE_API_URL } from "../../../../utils/Url";
import GetsinglePackage from "@/components/GetsinglePackage";
export async function generateMetadata({ params: { locale, id } }) {
  const pack = await GetsinglePackage(locale, id);
  const messages = await getMessages({ locale });
  const detailMessages = messages?.Detail;
  const city = messages?.HomePage?.packages?.[`package${id}`]?.city;
  const description =
    messages?.HomePage?.packages?.[`package${id}`]?.description;
  const ogImage = pack?.packageimage;

  return {
    title: detailMessages?.title
      ? `${detailMessages.title} ${city || "City"}`
      : "Default Title",
    description: description || "Default Description",
    openGraph: {
      title: detailMessages?.title
        ? `${detailMessages.title} ${city || "City"}`
        : "Default Title",
      description: description,
      url: `${BASE_API_URL}/${locale}/${id}`,
      images: [
        {
          url: ogImage,
          width: 800,
          height: 600,
          alt: "Og Image Alt",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: detailMessages?.title
        ? `${detailMessages.title} ${city || "City"}`
        : "Default Title",
      description: description,
      // image: `${BASE_API_URL}/${locale}/${id}/packageimage`,
      image: ogImage,
    },
    robots: "index, follow",
    keywords: "shop, products, discounts, buy, offers, shopping",
    author: "Desire",
  };
}
