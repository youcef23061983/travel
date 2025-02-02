import React from "react";
import { useTranslations } from "next-intl";
import FrontImage from "@/components/frontPage/FrontImage";
import { getMessages } from "next-intl/server";
export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["Cookies"];

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
  };
}

const Cookies = () => {
  const t = useTranslations("Cookies");

  return (
    <div>
      <FrontImage
        image="/pageImages/cookies.jpg"
        header1="imgHeader"
        header2="imgTitle"
        translateName="Cookies"
      />
      <div className="px-[10px]">
        <p className="px-[10px] mt-[40px]">{t("paragraph")}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <div
          className="w-full max-w-4xl p-12 rounded-2xl shadow-lg bg-white"
          style={{ boxShadow: "0.5rem 0.5rem 3rem #95615e" }}
        >
          <h2 className="text-3xl font-bold text-[#95615e] text-center mb-6">
            {t("title")}
          </h2>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("introduction")}
              </h2>
              <p className="text-2xl">{t("introductionP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("whatAreCookies")}
              </h2>
              <p className="text-2xl">{t("whatAreCookiesP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("howWeUseCookies")}
              </h2>
              <p className="text-2xl">{t("howWeUseCookiesP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("typesOfCookiesWeUse")}
              </h2>
              <p className="text-2xl">{t("typesOfCookiesWeUseP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("managingCookies")}
              </h2>
              <p className="text-2xl">{t("managingCookiesP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("changesToThisCookiesPolicy")}
              </h2>
              <p className="text-2xl">{t("changesToThisCookiesPolicyP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("contactUs")}
              </h2>
              <p className="text-2xl">{t("contactUsP")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
