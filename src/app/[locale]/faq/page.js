import FrontImage from "@/components/frontPage/FrontImage";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["Faq"];

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
  };
}

const page = () => {
  const t = useTranslations("Faq");

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
      <div className="flex flex-wrap justify-center gap-4">
        <div
          className="w-full max-w-4xl p-12 rounded-2xl shadow-lg bg-white"
          style={{ boxShadow: "0.5rem 0.5rem 3rem #95615e" }}
        >
          <h2 className="text-3xl font-bold text-[#95615e] text-center mb-6">
            {t("general")}
          </h2>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("general1")}
              </h2>
              <p className="text-2xl">{t("general1P")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("general2")}
              </h2>
              <p className="text-2xl">{t("general2P")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("general3")}
              </h2>
              <p className="text-2xl">{t("general3P")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("general4")}
              </h2>
              <p className="text-2xl">{t("general4P")}</p>
            </div>
          </div>
        </div>

        <div
          className="w-full max-w-4xl p-12 rounded-2xl shadow-lg bg-white"
          style={{ boxShadow: "0.5rem 0.5rem 3rem #95615e" }}
        >
          <h2 className="text-3xl font-bold text-[#95615e] text-center mb-6">
            {t("bookingPayment")}
          </h2>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("bookingPayment1")}
              </h2>
              <p className="text-2xl">{t("bookingPayment1P")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("bookingPayment2")}
              </h2>
              <p className="text-2xl">{t("bookingPayment2P")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("bookingPayment3")}
              </h2>
              <p className="text-2xl">{t("bookingPayment3P")}</p>
            </div>
          </div>
        </div>

        <div
          className="w-full max-w-4xl p-12 rounded-2xl shadow-lg bg-white"
          style={{ boxShadow: "0.5rem 0.5rem 3rem #95615e" }}
        >
          <h2 className="text-3xl font-bold text-[#95615e] text-center mb-6">
            {t("travelRequirements")}
          </h2>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("travelRequirements1")}
              </h2>
              <p className="text-2xl">{t("travelRequirements1P")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("travelRequirements2")}
              </h2>
              <p className="text-2xl">{t("travelRequirements2P")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("travelRequirements3")}
              </h2>
              <p className="text-2xl">{t("travelRequirements3P")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
