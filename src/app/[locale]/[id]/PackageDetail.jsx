import { useTranslations } from "next-intl";

export default function PackageDetail({ locale, pack }) {
  const t = useTranslations("HomePage");

  return (
    <div>
      <h2>{t(`packages.${pack.key}.city`)}</h2>
      <p>Price: {pack.price}</p>
    </div>
  );
}
