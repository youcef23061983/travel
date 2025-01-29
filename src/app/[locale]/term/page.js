import React from "react";
import { useTranslations } from "next-intl";
import FrontImage from "@/components/frontPage/FrontImage";
import { getMessages } from "next-intl/server";
export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["Terms"];

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
  };
}

const page = () => {
  const t = useTranslations("Terms");

  return (
    <div>
      <FrontImage
        image="/pageImages/terms.jpg"
        header1="imgHeader"
        header2="imgTitle"
        translateName="Terms"
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
            {t("termsAndConditions")}
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
                {t("servicesProvided")}
              </h2>
              <p className="text-2xl">{t("servicesProvidedP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("bookingAndPayment")}
              </h2>
              <p className="text-2xl">{t("bookingAndPaymentP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("cancellationAndRefundPolicy")}
              </h2>
              <p className="text-2xl">{t("cancellationAndRefundPolicyP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("travelInsurance")}
              </h2>
              <p className="text-2xl">{t("travelInsuranceP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("visaAndTravelDocumentation")}
              </h2>
              <p className="text-2xl">{t("visaAndTravelDocumentationP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("changesToBookings")}
              </h2>
              <p className="text-2xl">{t("changesToBookingsP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("liability")}
              </h2>
              <p className="text-2xl">{t("liabilityP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("localLawsAndRegulations")}
              </h2>
              <p className="text-2xl">{t("localLawsAndRegulationsP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("privacyAndDataProtection")}
              </h2>
              <p className="text-2xl">{t("privacyAndDataProtectionP")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl text-[#95615e] font-medium">
                {t("governingLaw")}
              </h2>
              <p className="text-2xl">{t("governingLawP")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
