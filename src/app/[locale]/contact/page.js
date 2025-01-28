import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import { FaWhatsapp } from "react-icons/fa";

import FrontImage from "@/components/frontPage/FrontImage";
import Link from "next/link";

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["Contact"];

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
  };
}
const phoneNumber = "+213698422907";
const message = "Hello! I would like to know more about your services.";
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;
const page = () => {
  const t = useTranslations("Contact");

  return (
    <div>
      <FrontImage
        image={"/pageImages/contact.jpg"}
        header1={"imgHeader"}
        header2={"imgTitle"}
        translateName={"Contact"}
      />
      <p className="px-[10px] ">
        <p className="px-[10px]  mt-[40px]">{t("paragraph")}</p>
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 text-white py-2 px-3 rounded-lg shadow-md hover:bg-green-600 transition-all w-max"
        >
          <FaWhatsapp className="mr-2 text-2xl" />
          {t("WhatsApp")}
        </Link>
      </p>
    </div>
  );
};

export default page;
