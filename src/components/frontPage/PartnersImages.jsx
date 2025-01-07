import { useLocale } from "next-intl";
import Image from "next/image";

const PartnersImages = () => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div
      className={`marquee fadeout-horizontal ${isRTL ? "rtl" : "ltr"}`}
      style={{ "--num-items": 7 }}
    >
      <div className="marquee-track">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="marquee-item"
            style={{
              "--item-position": index + 1,
              animation: `${
                isRTL ? "marquee-move-rtl" : "marquee-move-ltr"
              } var(--speed) linear infinite`,
            }}
          >
            <Image
              src={`/homepage/partners/${index + 1}.png`}
              width={40}
              height={40}
              className="img"
              alt={`Partner ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersImages;
