import Link from "next/link";
import { getPostMetadata } from "@/components/getPostMetaData";
import PostPreview from "@/components/PostPreview";
import PostFilterContainer from "@/components/PostFilterContainer";
import CustomFooter from "@/components/Footer";

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
    post.tags.includes("FlameEngine"),
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
        <div className="text-2xl tracking-tight">
        <p>초보 개발자의</p>
        <p>게임 개발 성장일지</p>
        <p >(feat. Flame Engine)</p>
        </div>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-6">
          게임 개발 무경험자가 Flutter의 Flame Engine으로 게임을 완성하는 과정을
          기록합니다.
        </p>

        <Link href={flameEngineStartLink} passHref>
          <button className="bg-blue-600 hover:bg-blue-800 text-white py-3 px-8 rounded-md text-lg transition duration-300 shadow-xl shadow-slate-700">
            <p>🔥Flame Engine을 이용한</p>
            <p>DevLog시리즈 시작하기</p>
          </button>
        </Link>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Recent Update</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentPosts}
        </div>
      </section>
      <div className="my-16 border-t pt-8"></div> 
      <section>
        <div className="text-2xl font-bold mb-6 border-b pb-2">

        <h2>
          ✨ Side Contents:
        </h2>
        <p>DB필요없는 정적 블로그 만들기 (feat. NextJS)</p>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          지금 보고 계신 정적 블로그를 만드는 과정과 코드를 함께 공유합니다.
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
        <CustomFooter />
    </main>
  );
}
