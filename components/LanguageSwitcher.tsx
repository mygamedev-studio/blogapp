"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n } from "../i18n-config";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex gap-2">
      {i18n.locales.map((locale) => {
        return (
          <button
            key={locale}
            onClick={() => router.push(redirectedPathName(locale))}
            className="text-white hover:underline uppercase"
          >
            {locale}
          </button>
        );
      })}
    </div>
  );
}
