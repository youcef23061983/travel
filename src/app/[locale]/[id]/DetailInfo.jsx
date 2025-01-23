import { useTranslations } from "next-intl";
import React from "react";
import "./detail.css";
import AnimatedTextArabic from "@/components/AnimatedTextArabic";
import AnimatedText from "@/components/AnimatedText";

const DetailInfo = ({ locale, pack }) => {
  const t = useTranslations("HomePage");
  const AnimatedComponent = locale === "en" ? AnimatedText : AnimatedTextArabic;
  const country = t("country");
  const contryName = t(`packages.${pack.key}.country`);

  const city = t("city");
  const cityName = t(`packages.${pack.key}.city`);

  const hotel = t("hotelName");
  const hotelName = t(`packages.${pack.key}.hotel`);

  const journeyDaysName = t("journeyDays");
  const journeyDays =
    locale === "en" ? `${pack.journeyDays} days` : `${pack.journeyDays} أيام `;
  const price = t("price");
  const priceName = pack.price;

  const review = t("review");
  const reviewName = pack.review;

  const expertJudgement = t("expertJudgement");
  const expertJudgementName = pack.expertJudgement;

  return (
    <div className="detailInfoDiv">
      <AnimatedComponent
        once
        text={t("detail")}
        el="h2"
        className="text-center mb-[20px] text-[#E5B9A2]"
      />
      <div className="detailHeader">
        <AnimatedComponent
          once
          text={`${country} -`}
          el="h2"
          className="text-center "
        />
        <AnimatedComponent
          once
          text={contryName}
          el="h2"
          className="text-center text-[#E5B9A2]"
        />
      </div>
      <div className="detailHeader">
        <AnimatedComponent
          once
          text={`${city} -`}
          el="h2"
          className="text-center "
        />
        <AnimatedComponent
          once
          text={cityName}
          el="h2"
          className="text-center  text-[#E5B9A2]"
        />
      </div>
      <div className="detailHeader">
        <AnimatedComponent
          once
          text={`${hotel} -`}
          el="h2"
          className="text-center "
        />
        <AnimatedComponent
          once
          text={hotelName}
          el="h2"
          className="text-center  text-[#E5B9A2]"
        />
      </div>
      <div className="detailHeader">
        <AnimatedComponent
          once
          text={`${journeyDaysName} -`}
          el="h2"
          className="text-center"
        />
        <AnimatedComponent
          once
          text={journeyDays}
          el="h2"
          className="text-center  text-[#E5B9A2]"
        />
      </div>
      <div className="detailHeader">
        <AnimatedComponent
          once
          text={`${price} -`}
          el="h2"
          className="text-center "
        />
        <AnimatedComponent
          once
          text={`${priceName} $`}
          el="h2"
          className="text-center  text-[#E5B9A2]"
        />
      </div>
      <div className="detailHeader">
        <AnimatedComponent
          once
          text={`${review} -`}
          el="h2"
          className="text-center "
        />
        <AnimatedComponent
          once
          text={reviewName}
          el="h2"
          className="text-center  text-[#E5B9A2]"
        />
      </div>
      <div className="detailHeader">
        <AnimatedComponent
          once
          text={`${expertJudgement} -`}
          el="h2"
          className="text-center "
        />
        <AnimatedComponent
          once
          text={expertJudgementName}
          el="h2"
          className="text-center  text-[#E5B9A2]"
        />
      </div>
    </div>
  );
};

export default DetailInfo;
