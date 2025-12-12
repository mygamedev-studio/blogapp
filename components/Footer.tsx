import Link from "next/link";
import { FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Locale } from "../i18n-config";
import { getDictionary } from "../get-dictionary";

export default function CustomFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <>
      <div className="my-10 "></div>
      <footer className="text-center ">
        <h2 className="text-2xl font-bold mb-4">{dict.footer.contact}</h2>
        <div className="flex justify-center gap-6 mb-4">
          <Link
            href="https://x.com/MyGameDevStudio "
            target="_blank"
            aria-label="X Profile"
          >
            <FaXTwitter className="w-8 h-8 text-white hover:text-slate-500 transition" />
          </Link>
          <Link
            href="https://www.youtube.com/@MyGame-Dev"
            target="_blank"
            aria-label="YouTube Channel"
          >
            <FaYoutube className="w-8 h-8 text-white hover:text-red-700 transition" />
          </Link>
          <Link
            href="https://github.com/mygamedev-studio"
            target="_blank"
            aria-label="GitHub Repository"
          >
            <FaGithub className="w-8 h-8 text-white dark:text-white hover:text-slate-500 transition" />
          </Link>
        </div>
        <p className="text-sm text-white mt-4">
          © {new Date().getFullYear()} {dict.footer.rights}
        </p>
        <p className="text-sm text-white">{dict.footer.feedback}</p>
      </footer>
    </>
  );
}
