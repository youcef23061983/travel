"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { usePathname } from "@/i18n/routing";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const pathname = usePathname();
  const t = useTranslations("HomePage");

  return (
    <div className="footerDiv">
      <Link href="/" className="footerLogo">
        <Image src="/logo.png" alt="Logo" width={140} height={140} />
      </Link>

      <ul className="footerLinks">
        <Link href="/" className={`link ${pathname === "/" ? "active" : ""}`}>
          {t("navbar.home")}
        </Link>
        <Link
          href="/term"
          className={`link ${pathname === "/term" ? "active" : ""}`}
        >
          {t("navbar.term")}
        </Link>
        <Link
          href="/policy"
          className={`link ${pathname === "/policy" ? "active" : ""}`}
        >
          {t("navbar.policy")}
        </Link>
        <Link
          href="/cookies"
          className={`link ${pathname === "/cookies" ? "active" : ""}`}
        >
          {t("navbar.cookies")}
        </Link>{" "}
        <Link
          href="/faq"
          className={`link ${pathname === "/faq" ? "active" : ""}`}
        >
          {t("navbar.faq")}
        </Link>{" "}
      </ul>
      <div className="footerIcons">
        <Link
          href="https://www.instagram.com"
          target="_blank"
          className="hover:text-pink-600 footerIcon"
        >
          <FaSquareInstagram />
        </Link>
        <Link
          href="https://www.facebook.com"
          target="_blank"
          className="hover:text-blue-600 footerIcon"
        >
          <FaSquareFacebook />
        </Link>
        <Link
          href="https://www.youtube.com"
          target="_blank"
          className="hover:text-red-600 footerIcon"
        >
          <FaYoutube />
        </Link>
      </div>
      <p style={{ marginTop: "3rem", fontSize: "15px" }}>{t("reserve")} </p>
    </div>
  );
};

export default Footer;
