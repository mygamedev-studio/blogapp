import Link from "next/link";
import { Orbit } from "next/font/google";
import TranslateButtons from "./TranslateButtons";

const orbitFont = Orbit({
  variable: "--font-orbit",
  subsets: ["latin"],
  weight: ["400"],
});

export default function StickyHeader() {
  const header = (
    <header className="sticky top-0 z-10 bg-slate-800 rounded-md">
      <div className="flex justify-between items-center bg-slate-800 p-4 my-6 rounded-md">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" width={60} height={30} />
          <h1 className="text-3xl text-white font-bold">&nbsp;GameDev Blog</h1>
        </Link>
        <TranslateButtons />
      </div>
    </header>
  );
  return header;
}
