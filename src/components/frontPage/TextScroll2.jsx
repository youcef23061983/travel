import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import AnimatedText from "../AnimatedText";
import AnimatedTextArabic from "../AnimatedTextArabic";

function TextScroll2() {
  const locale = useLocale();
  const t = useTranslations("HomePage");

  const AnimatedComponent = locale === "en" ? AnimatedText : AnimatedTextArabic;

  return (
    <section>
      <AnimatedComponent
        once
        text={t("bestPartners2")}
        el="h2"
        className="text-center mt-[40px]"
      />
    </section>
  );
}

export default TextScroll2;
