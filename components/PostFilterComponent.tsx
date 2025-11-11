"use client"; // <-- 클라이언트 컴포넌트 선언

import { useSearchParams } from "next/navigation"; // 클라이언트에서만 사용 가능한 훅
import PostPreview from "@/components/PostPreview";
import LinkButton from "@/components/LinkButton";
import { PostMetaData } from "./PostMetaData"; // PostMetaData 타입 정의가 있다고 가정

// 서버 컴포넌트에서 정적으로 가져온 데이터를 프롭스로 받습니다.
export default function PostFilterComponent({
  sortedPosts,
}: {
  sortedPosts: PostMetaData[];
}) {
  // 클라이언트 컴포넌트에서만 사용할 수 있는 useSearchParams 훅 사용
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get("tag");

  const tags = [...new Set(sortedPosts.flatMap((post) => post.tags))].filter(
    (tag) => tag !== "blog",
  );

  const filteredPosts =
    selectedTag && selectedTag !== "all"
      ? sortedPosts.filter((post) => post.tags.includes(selectedTag))
      : sortedPosts;

  const postPreviews = filteredPosts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      <div className="text-3xl"> 🕹️ Blog Posts</div> <br />
      <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
        <LinkButton
          href="/"
          text="All"
          icon={null}
          selected={selectedTag === "all" || !selectedTag}
        />
        {tags.map((tag) => (
          <LinkButton
            key={tag}
            href={`/?tag=${tag}`}
            text={tag}
            icon={null}
            selected={selectedTag === tag}
          />
        ))}
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
    </div>
  );
}
