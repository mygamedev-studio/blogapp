import { getPostMetadata } from "@/components/getPostMetaData";
import PostPreview from "@/components/PostPreview";
import LinkButton from "@/components/LinkButton";
import { FaYoutube, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// ----------------------------------------------------
// 1. dynamic 설정을 제거하거나 'force-static'으로 변경
export const dynamic = 'force-static';
// 2. searchParams 프롭스 제거
// ----------------------------------------------------

// ----------------------------------------------------
// 3. 필터링 로직을 클라이언트 컴포넌트로 분리합니다.
import PostFilterContainer from "@/components/PostFilterContainer";
// ----------------------------------------------------


export default function Home() {
  
  // 빌드 시점에 데이터를 가져와 정적으로 만듭니다.
  const postMetadata = getPostMetadata();
  const sortedPosts = postMetadata.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const recentPosts = sortedPosts
    .slice(0, 2)
    .map((post) => <PostPreview key={post.slug} {...post} />);

  return (
    <main>

      <section id="hero" className=" text-center mb-8">
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        게임 개발과 웹 기술을 탐험하는 개발자의 기록. 새로운 인사이트를 얻어가세요!
      </p>
      {/* CTA 버튼 등 */}
    </section>
      <section>
        <div className="text-2xl">🕹️ Recent Posts</div> <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentPosts}
        </div>
      </section>
      <br />
      
      {/* 4. 필터링 기능이 필요한 부분을 클라이언트 컴포넌트로 대체 */}
      <PostFilterContainer sortedPosts={sortedPosts} /> 

      <br />
      <section>
        <div className="text-2xl font-bold">🕹️ Contact</div> <br />
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
          <LinkButton
            href=""
            text=""
            icon={<FaYoutube color="lightgray" />}
          />
          <LinkButton
            href=""
            text=""
            icon={<FaXTwitter color="lightgray" />}
          />
          <LinkButton
            href=""
            text=""
            icon={<FaGithub color="lightgray" />}
          />
          <LinkButton href="" text="" icon={<FaInstagramSquare />} />
        </div>
      </section>
      <br />
    </main>
  );
}