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
      {/* 2. 🕹️ Recent Posts: 최신 업데이트 목록 */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">Recent Update</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentPosts}
        </div>
      </section>
      <div className="my-16 border-t pt-8"></div> {/* 구분선 */}
      {/* 3. 🧑‍💻 Secondary Content: NextJS 블로그 기록 (보조 주제 강조) */}
      <section>
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">
          ✨ Side Contents: DB가 필요없는 완전 정적 블로그 만들기 (feat. NextJS)
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          지금 보고 계신 정적 블로그를 만드는 과정과 코드를 함께 공유합니다.
          (태그: nextjs)
        </p>

        {/* NextJS 태그 필터링을 PostFilterContainer에서 처리하거나, 최신 NextJS 글을 따로 표시 */}
        {/* 여기서는 NextJS 태그가 포함된 최신 글 1개를 찾아 표시하는 예시 */}
        {sortedPosts.find((post) => post.tags.includes("nextjs"))?.title && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PostPreview
              {...sortedPosts.find((post) => post.tags.includes("nextjs"))!}
            />
          </div>
        )}
      </section>
      <div className="my-16 border-t pt-8"></div> {/* 구분선 */}
      {/* 4. Post Filter: 전체 포스트 목록 및 태그 필터링 */}
      {/* 클라이언트 컴포넌트인 PostFilterContainer에게 정렬된 데이터를 전달하여 클라이언트에서 필터링하게 합니다. */}
      <section>
        <PostFilterContainer sortedPosts={sortedPosts} />
      </section>
      <div className="my-16 border-t pt-8"></div> {/* 구분선 */}
      {/* 5. Contact/Links (푸터로 활용) */}
      <footer className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">함께 소통해요!</h2>
        <div className="flex justify-center gap-6 mb-4">
          <Link href="" target="_blank" aria-label="YouTube Channel">
            <FaYoutube className="w-8 h-8 text-red-600 hover:text-red-700 transition" />
          </Link>
          <Link href="" target="_blank" aria-label="X Profile">
            <FaXTwitter className="w-8 h-8 text-black dark:text-white hover:text-gray-500 transition" />
          </Link>
          <Link href="" target="_blank" aria-label="GitHub Repository">
            <FaGithub className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-gray-500 transition" />
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} [블로그 이름]. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          피드백이나 질문은 유튜브 댓글로 남겨주시면 가장 빠르게 답변해드립니다.
        </p>
      </footer>
    </main>
  );
}
