"use client";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
const Package = ({ pack }) => {
  const t = useTranslations("HomePage");
  const projectsVariants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: { delay: index * 0.3, ease: "easeInOut" },
    }),
  };
  const { packageimage, id, price } = pack;
  return (
    <motion.div
      key={id}
      variants={projectsVariants}
      initial="hidden"
      whileInView="visible"
      custom={id}
      className="package"
      viewport={{ once: true }}
    >
      <Image
        src={packageimage}
        className="img"
        alt={`product ${id + 1}`}
        width={300}
        height={300}
      />
      <h3 style={{ fontWeight: "400" }}>
        {t("city")}: {t(`packages.package${pack.id}.city`)}
      </h3>
      <h3>
        {t("price")}: {`${price} $`}
      </h3>
      <Link href={pack.id} className="slidelink">
        {t("discover")}
      </Link>
    </motion.div>
  );
};

export default Package;
