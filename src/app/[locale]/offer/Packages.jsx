import { useTranslations } from "next-intl";
import React from "react";

const Packages = ({ Packages }) => {
  const t = useTranslations("Offer");

  return (
    <div>
      <h1>{t("name")}</h1>
      <h1>{t("price")}</h1>
    </div>
  );
};

export default Packages;
