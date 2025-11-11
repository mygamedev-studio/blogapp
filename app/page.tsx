import Link from "next/link";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { getPostMetadata } from "@/components/getPostMetaData";
import PostPreview from "@/components/PostPreview";
import PostFilterContainer from "@/components/PostFilterContainer";

export const dynamic = "force-static";

export default function Home() {
  const postMetadata = getPostMetadata();
  const sortedPosts = postMetadata.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const recentPosts = sortedPosts
    .slice(0, 2)
    .map((post) => <PostPreview key={post.slug} {...post} />);

  const flameEngineStartPost = sortedPosts.findLast((post) =>
    post.tags.includes("flame"),
  );
  const flameEngineStartLink = flameEngineStartPost
    ? `/posts/${flameEngineStartPost.slug}`
    : "#j";

  return (
    <main className="container mx-auto">
      <section
        id="hero"
        className="py-4 px-4 my-8 text-center bg-gray-800 rounded-2xl shadow-lg "
      >
        <p className="text-3xl tracking-tight">
          초보 개발자의 게임 개발 성장일지{" "}
        </p>
        <p className="text-3xl">(feat. Flame Engine)</p>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-6">
          게임 개발 무경험자가 Flutter의 Flame Engine으로 게임을 완성하는 과정을
          기록합니다.
        </p>

        <Link href={flameEngineStartLink} passHref>
          <button className="bg-blue-600 hover:bg-blue-800 text-white py-3 px-8 rounded-md text-lg transition duration-300 shadow-xl shadow-slate-700">
            🔥Flame Engine 시리즈 시작하기
          </button>
        </Link>
      </section>
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">Recent Update</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentPosts}
        </div>
      </section>
      <div className="my-16 border-t pt-8"></div> 
      <section>
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">
          ✨ Side Contents: DB가 필요없는 완전 정적 블로그 만들기 (feat. NextJS)
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          지금 보고 계신 정적 블로그를 만드는 과정과 코드를 함께 공유합니다.
          (태그: nextjs)
        </p>
        {sortedPosts.find((post) => post.tags.includes("nextjs"))?.title && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PostPreview
              {...sortedPosts.find((post) => post.tags.includes("nextjs"))!}
            />
          </div>
        )}
      </section>
      <div className="my-16 border-t pt-8"></div> 
      <section>
        <PostFilterContainer sortedPosts={sortedPosts} />
      </section>
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
    </main>
  );
}
