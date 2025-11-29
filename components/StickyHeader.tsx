import Link from "next/link";
import { Orbit } from "next/font/google";
import LanguageSwitcher from "./LanguageSwitcher";

const orbitFont = Orbit({
  variable: "--font-orbit",
  subsets: ["latin"],
  weight: ["400"],
});

export default function StickyHeader() {
  const header = (
    <>
    <header className="sticky top-0 z-10 ">
      <Link href="/" className="rounded-md justify-center">
        <div className="flex justify-center items-center bg-slate-800 p-4 mt-6 rounded-md">
          <img src="/images/logo.png" width={60} height={30} />
          <h1 className="text-3xl text-white font-bold">&nbsp;GameDev Blog</h1>
        </div>
      </Link>
    <div className= 'flex justify-end'>
    <LanguageSwitcher />
    </div>
    </header>
    </>
  );
  return header;
}
