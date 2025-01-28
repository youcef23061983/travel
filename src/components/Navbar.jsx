"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { FaX } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa";
import Image from "next/image";
import { useSession } from "next-auth/react";

import LocolSwitcher from "./LocolSwitcher";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navCenter = useRef(null);
  const pathname = usePathname();
  const locale = useLocale();

  const { data: session } = useSession();

  useEffect(() => {
    setShowLinks(false);
  }, [pathname]);
  useLayoutEffect(() => {
    let isMounted = true;

    const handleScroll = () => {
      if (!isMounted) return;

      const scrollHeight = window.scrollY;
      const navCenterHeight = navCenter.current.getBoundingClientRect().height;

      if (scrollHeight > navCenterHeight) {
        navCenter.current.style.position = "fixed";
        navCenter.current.style.background =
          "linear-gradient( \
        to right bottom, \
        #f3e1c8,  \
        #edd2a8, \
        #e6c49a,  \
        #d8b38a \
      )";

        navCenter.current.style.transition = "all 0.8s linear";
      } else {
        navCenter.current.style.background = "transparent";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      isMounted = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const t = useTranslations("HomePage");

  return (
    <nav ref={navCenter} className="nav">
      <button
        type="button"
        onClick={() => setShowLinks(!showLinks)}
        className="ham"
      >
        {showLinks ? (
          <FaX className="logo" />
        ) : (
          <FaAlignJustify className="logo" />
        )}
      </button>
      <Link href="/" className="x">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </Link>
      <ul className={`${showLinks ? "links show-nav" : "links"}`}>
        <Link href="/" className={`link ${pathname === "/" ? "active" : ""}`}>
          {t("navbar.home")}
        </Link>
        <Link
          href="/offer"
          className={`link ${pathname === "/offer" ? "active" : ""}`}
        >
          {t("navbar.offer")}
        </Link>
        <Link
          href="/service"
          className={`link ${pathname === "/service" ? "active" : ""}`}
        >
          {t("navbar.service")}
        </Link>{" "}
        <Link
          href="/about"
          className={`link ${pathname === "/about" ? "active" : ""}`}
        >
          {t("navbar.about")}
        </Link>{" "}
        <Link
          href="/contact"
          className={`link ${pathname === "/contact" ? "active" : ""}`}
        >
          {t("navbar.contact")}
        </Link>
      </ul>
      <div className="logDiv">
        {session ? (
          <div className="logName">
            <span style={{ fontSize: "15px" }}>
              {session?.user?.name?.slice(0, 6)}...
            </span>

            <Link
              className="link"
              href={`/api/auth/signout?callbackUrl=/${locale}`}
            >
              {t("navbar.logout")}
            </Link>
          </div>
        ) : (
          <Link className="link" href={`/api/auth/signin/${locale}`}>
            {t("navbar.login")}
          </Link>
        )}
        <LocolSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
