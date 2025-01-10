import Image from "next/image";
import React from "react";
import Counter from "./Counter";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import AnimatedText from "../AnimatedText";
import AnimatedTextArabic from "../AnimatedTextArabic";
import Word from "@/components/Word";

const Statistics = () => {
  const locale = useLocale();
  const AnimatedComponent = locale === "en" ? AnimatedText : AnimatedTextArabic;

  const t = useTranslations("HomePage");
  return (
    <div className="staticDiv">
      <Image
        src="/homepage/infoImg.jpg"
        width={700}
        height={700}
        className="staticImg"
      />

      <div className="staticInfo">
        <AnimatedComponent once text={t("infoTitle")} el="h2" />
        <Word paragraph={t("infoParagraph")} />

        <Counter />
      </div>
    </div>
  );
};

export default Statistics;
