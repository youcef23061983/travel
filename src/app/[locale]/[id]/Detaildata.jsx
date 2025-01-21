import { useTranslations } from "next-intl";
import Image from "next/image";

const Detaildata = ({ pack }) => {
  const t = useTranslations("HomePage");
  const daysimages = pack ? pack?.daysImages : [];
  return (
    <div>
      <div>
        <h2>{t(`packages.${pack.key}.city`)}</h2>
        <p>Price: {pack.price}</p>
        <p>reviews : {pack.review}</p>
        <p>Price: {pack.journeyDays}</p>
        {daysimages.map((im, i) => {
          return <Image key={i} width={40} height={40} src={im} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Detaildata;
