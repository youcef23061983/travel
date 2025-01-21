import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  pathnames: {
    "/about": {
      ar: "/من-نحن",
      en: "/about-us",
    },
    "/contact": {
      ar: "/اتصل",
      en: "/contact-us",
    },
    "/service": {
      ar: "/خدماتنا",
      en: "/our-service",
    },
    "/policy": {
      ar: "/سياسة الخصوصية",
      en: "/policy",
    },
    "/term": {
      ar: "/الشروط والأحكام",
      en: "/Terms & Conditions",
    },
    "/cookies": {
      ar: "/سياسة ملفات تعريف الارتباط",
      en: "/Cookies Policy",
    },
    "/faq": {
      ar: "/الأسئلة الشائعة",
      en: "/FAQ",
    },
    "/top": {
      ar: "/الافضل",
      en: "/top",
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
