// @/components/SeriesNavigation.tsx (서버 컴포넌트 가능)

import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

interface SeriesNavigationProps {
  seriesPosts: PostMetaData[]; // 이미 정렬된 해당 시리즈의 모든 포스트
  currentSlug: string;
}

export default function SeriesNavigation({
  seriesPosts,
  currentSlug,
}: SeriesNavigationProps) {
  // 1. 현재 포스트의 인덱스를 찾습니다.
  const currentIndex = seriesPosts.findIndex(
    (post) => post.slug === currentSlug,
  );

  // 2. 이전/다음 포스트 결정
  const nextPost = currentIndex > 0 ? seriesPosts[currentIndex - 1] : null;
  const previousPost =
    currentIndex < seriesPosts.length - 1
      ? seriesPosts[currentIndex + 1]
      : null;

  if (!previousPost && !nextPost) {
    return null; // 시리즈가 한 개뿐이거나 목록 오류 시 표시 안 함
  }

  const buttonStyle = "block p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition"
  const textStyle = "text-sm text-slate-400 block mb-1"

  return (
    <div className="border-t border-b border-gray-300 my-8 py-6 grid grid-cols-2 gap-10">
      {/* 이전 포스트 버튼 */} 
      <div className="text-left">
        {previousPost && (
          <Link
            href={`/posts/${previousPost.slug}`}
            className={buttonStyle}
          >
            <span className={textStyle}>
              ← Previous Post
            </span>
            <h4 className="font-semibold">{previousPost.title}</h4>
          </Link>
        )}
      </div>

      {/* 다음 포스트 버튼 */}
      <div className="text-right">
        {nextPost && (
          <Link
            href={`/posts/${nextPost.slug}`}
            className={buttonStyle}
          >
            <span className={textStyle}>
              Next Post →
            </span>
            <h4 className="font-semibold">{nextPost.title}</h4>
          </Link>
        )}
      </div>
    </div>
  );
}
