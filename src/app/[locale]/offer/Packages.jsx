import { useTranslations } from "next-intl";
import React, { Suspense } from "react";
import Package from "./Package";

const Packages = ({ PackagesData }) => {
  const t = useTranslations("Offer");
  console.log(Packages);

  return (
    <div>
      <p className="px-[10px] text-center mt-[40px]">{t("paragraph")}</p>
      <div className="packages">
        {PackagesData?.map((pack) => (
          <Suspense fallback="...loading">
            <Package pack={pack} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Packages;
