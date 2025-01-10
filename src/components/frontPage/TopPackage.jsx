import AnimatedText from "../AnimatedText";
import AnimatedTextArabic from "../AnimatedTextArabic";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

function TopPackage() {
  const locale = useLocale();
  const t = useTranslations("HomePage");

  const AnimatedComponent = locale === "en" ? AnimatedText : AnimatedTextArabic;
  const packages = [
    {
      images: ["rrr", "ddd"],
      key: "package1",
    },
    {
      images: ["rrr", "ddd"],
      key: "package2",
    },
    {
      images: ["rrr", "ddd"],
      key: "package3",
    },
    {
      images: ["rrr", "ddd"],
      key: "package4",
    },
    {
      images: ["rrr", "ddd"],
      key: "package5",
    },
    {
      images: ["rrr", "ddd"],
      key: "package6",
    },
    {
      images: ["rrr", "ddd"],
      key: "package7",
    },
    {
      images: ["rrr", "ddd"],
      key: "package8",
    },
    {
      images: ["rrr", "ddd"],
      key: "package9",
    },
    {
      images: ["rrr", "ddd"],
      key: "package10",
    },
    {
      images: ["rrr", "ddd"],
      key: "package11",
    },
    {
      images: ["rrr", "ddd"],
      key: "package12",
    },
    {
      images: ["rrr", "ddd"],
      key: "package13",
    },
    {
      images: ["rrr", "ddd"],
      key: "package14",
    },
    {
      images: ["rrr", "ddd"],
      key: "package15",
    },
    {
      images: ["rrr", "ddd"],
      key: "package16",
    },
    {
      images: ["rrr", "ddd"],
      key: "package17",
    },
    {
      images: ["rrr", "ddd"],
      key: "package18",
    },
  ];

  return (
    <section>
      <AnimatedComponent
        once
        text={t("topHeader")}
        el="h2"
        className="text-center mt-[40px]"
      />
      <div>
        {packages.map((pack, index) => {
          const country = t(`packages.${pack.key}.country`);
          const city = t(`packages.${pack.key}.city`);
          return (
            <div key={index}>
              <h1>{country}</h1>
              <h1>{city}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TopPackage;
