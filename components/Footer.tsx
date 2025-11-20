import Link from "next/link";
import { FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function CustomFooter() {

return (
<>
      <div className="my-16 border-t pt-8"></div> 
      <footer className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Contact Me!</h2>
        <div className="flex justify-center gap-6 mb-4">
          <Link href="https://x.com/MyGameDevStudio " target="_blank" aria-label="X Profile">
            <FaXTwitter className="w-8 h-8 text-gray-700 hover:text-white transition" />
          </Link>
          <Link href="https://www.youtube.com/@MyGame-Dev" target="_blank" aria-label="YouTube Channel">
            <FaYoutube className="w-8 h-8 text-gray-700 hover:text-red-700 transition" />
          </Link>
          <Link href="https://github.com/mygamedev-studio" target="_blank" aria-label="GitHub Repository">
            <FaGithub className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-white transition" />
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} My Game Dev Blog. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          Please give me Feedback or questions on X.
        </p>
      </footer>
</>
)
}