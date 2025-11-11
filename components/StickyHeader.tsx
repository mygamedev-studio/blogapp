import Link from "next/link";
import { Orbit } from "next/font/google";

const orbitFont = Orbit({
  variable: "--font-orbit",
  subsets: ["latin"],
  weight: ["400"],
});

export default function StickyHeader() {
  const header = (
    <header className="sticky top-0 z-10 bg-slate-800 rounded-md">
      <Link href="/">
        {/* 기존의 스타일은 유지하되, sticky 속성으로 인해 헤더가 움직이지 않도록 보장합니다. */}
        <div className="text-center bg-slate-800 p-4 my-6 rounded-md">
          <h1 className="text-3xl text-white font-bold">
            🕹️My Game Dev Blog🕹️
          </h1>
        </div>
      </Link>
    </header>
  );
  return header;
}
