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
    "/offer": {
      ar: "/عروض جماعية",
      en: "/group-offer",
    },
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
