// "use client";
// import { useTranslations } from "next-intl";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   FaSquareFacebook,
//   FaSquareInstagram,
//   FaYoutube,
// } from "react-icons/fa6";

// const Footer = () => {
//   const pathname = usePathname();
//   const t = useTranslations("HomePage");

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "Contact", href: "/contact" },
//     { name: "About", href: "/about" },

//     { name: "Terms&Conditions", href: "/terms" },
//     { name: "FAQ", href: "/faq" },
//   ];
//   return (
//     <div>
//       <Link href="/">
//         <Image src="/logo.png" alt="Logo" width={140} height={140} />
//       </Link>{" "}
//       <div className="rightsLogo">
//         <span style={{ marginBottom: "0", fontSize: "15px" }}>
//           © 2024 GYM Rester Jeune Tous droits réservés
//         </span>
//         <div className="footerLogos">
//           <Link
//             href="https://www.instagram.com"
//             target="_blank"
//             className="hover:text-pink-600  footericon"
//           >
//             <FaSquareInstagram />
//           </Link>
//           <Link
//             href="https://www.facebook.com"
//             target="_blank"
//             className=" hover:text-blue-600 footericon"
//           >
//             <FaSquareFacebook />
//           </Link>
//           <Link
//             href="https://www.youtube.com"
//             target="_blank"
//             className=" hover:text-red-600 footericon"
//           >
//             <FaYoutube />
//           </Link>
//         </div>
//       </div>
//       <div className="footerLinksLogo">
//         <ul className="footerLinks">
//           {links.map((link) => {
//             let linkHref = link.href;
//             linkHref = linkHref.slice(1);
//             return (
//               <li key={link.href}>
//                 <Link
//                   href={link.href}
//                   className={`link ${pathname === link.href ? "active" : ""}`}
//                 >
//                   {t(`navbar.${linkHref}`)}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Footer;

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
