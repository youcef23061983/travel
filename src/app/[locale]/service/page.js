import FrontImage from "@/components/frontPage/FrontImage";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import FlightSearch from "./FlightSearchPage";

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["Service"];

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
  };
}
const page = () => {
  const t = useTranslations("Service");
  const phoneNumber = "+213698422907"; // Replace with your phone number
  const message = "Hello! I would like to know more about your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div>
      <FrontImage
        image={"/pageImages/service.jpg"}
        header1={"imgHeader"}
        header2={"imgTitle"}
        translateName={"Service"}
      />
      <div className="px-[10px] ">
        <p className=" mt-[40px]">{t("paragraph")}</p>
        <p>{t("phoneNumber")}: 00000000</p>
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 text-white py-2 px-3 rounded-lg shadow-md hover:bg-green-600 transition-all w-max"
        >
          <FaWhatsapp className="mr-2 text-2xl" />
          {t("WhatsApp")}
        </Link>
      </div>
      <FlightSearch />
    </div>
  );
};

export default page;
