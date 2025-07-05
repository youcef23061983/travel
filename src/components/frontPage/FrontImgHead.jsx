import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import AnimatedText from "../AnimatedText";
import AnimatedTextArabic from "../AnimatedTextArabic";

function FrontImgHead({ translateName, header1, header2 }) {
  const locale = useLocale();
  const t = useTranslations(translateName);

  const AnimatedComponent = locale === "en" ? AnimatedText : AnimatedTextArabic;

  return (
    <div>
      <AnimatedComponent
        once
        text={t(`${header1}`)}
        el="h2"
        className="text-center font-extrabold mb-[30px]"
      />

      <AnimatedComponent
        once
        el="h3"
        text={t(`${header2}`)}
        repeatDelay={10000}
        className="text-center font-extrabold"
      />
    </div>
  );
}

export default FrontImgHead;
