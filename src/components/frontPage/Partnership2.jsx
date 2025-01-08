import { useLocale } from "next-intl";
import Image from "next/image";

const Partnership2 = () => {
  return (
    <div className={"marquee fadeout-horizontal"} style={{ "--num-items": 7 }}>
      <div className="marquee-track">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="marquee-item"
            style={{
              "--item-position": index + 1,
            }}
          >
            <Image
              src={`/homepage/partners-hotels/${index + 1}.png`}
              width={80}
              height={80}
              className="img"
              alt={`Partner ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnership2;
