import FrontImage from "@/components/frontPage/FrontImage";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("Contact");

  return (
    <div>
      <FrontImage
        image={"/pageImages/faq.jpg"}
        header1={"imgHeader"}
        header2={"imgTitle"}
        translateName={"Faq"}
      />
      <div className="px-[10px] ">
        <p className="px-[10px]  mt-[40px]">{t("paragraph")}</p>
      </div>
    </div>
  );
};

export default page;
