"use client";
import { useRouter, routing, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

const LocolSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeValue = useLocale();
  const pathname = usePathname();
  const params = useParams();

  const changeHandler = (e) => {
    const nextLocale = e.target.value;

    router.replace({ pathname, params }, { locale: nextLocale });
  };
  return (
    <label htmlFor="switcher" className="border-2 rounded">
      <select
        name="switcher"
        id="switcher"
        className="bg-transparant py-2"
        onChange={changeHandler}
        defaultValue={localeValue}
        disabled={isPending}
      >
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LocolSwitcher;
