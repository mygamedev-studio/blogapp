"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { GrLanguage } from "react-icons/gr";

const languages = [
  { code: "en", name: "English" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어 (원문)" },
];

export default function TranslateButtons() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const createTranslateUrl = (langCode: string) => {
    // window 객체는 클라이언트 사이드에서만 접근 가능하므로, 함수 호출 시점에 확인합니다.
    if (typeof window === "undefined") return "#";

    const currentUrl = window.location.origin + pathname;

    // 한국어 원문으로 돌아올 때는 그냥 현재 페이지 URL 사용
    if (langCode === "ko") {
      // Google 번역 URL에서 원래 페이지로 돌아올 때 사용됩니다.
      return currentUrl;
    }
    return `https://translate.google.com/translate?sl=ko&tl=${langCode}&u=${encodeURIComponent(currentUrl)}`;
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 rounded-full hover:bg-slate-700 transition-colors"
        aria-label="Translate page"
      >
        <GrLanguage className="w-5 h-5 text-white" />
      </button>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-36 origin-top-right rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {languages.map((lang) => (
              <a key={lang.code} href={createTranslateUrl(lang.code)} className="text-white block px-4 py-2 text-sm hover:bg-slate-700 rounded-md">
                {lang.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}