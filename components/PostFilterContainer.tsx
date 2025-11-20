"use client";

import { useState, useMemo } from "react";
import LinkButton from "@/components/LinkButton";
import PostPreview from "@/components/PostPreview";
// PostMetaData 타입 정의가 있다고 가정합니다.
import { PostMetaData } from "./PostMetaData";

// 이 컴포넌트가 태그 상태를 관리하고 필터링 로직을 수행합니다.
export default function PostFilterContainer({
  sortedPosts,
}: {
  sortedPosts: PostMetaData[];
}) {
  // 선택된 태그 상태를 useState로 관리
  const [selectedTag, setSelectedTag] = useState<string | "all">("all");

  // 모든 태그 목록을 계산 (컴포넌트가 리렌더링 되어도 불필요한 재계산 방지)
  const tags = useMemo(() => {
    return [...new Set(sortedPosts.flatMap((post) => post.tags))].filter(
      (tag) => tag !== "blog",
    );
  }, [sortedPosts]);

  // 선택된 태그에 따라 필터링된 포스트 목록 계산
  const filteredPosts = useMemo(() => {
    if (selectedTag === "all" || !selectedTag) {
      return sortedPosts;
    }
    return sortedPosts.filter((post) => post.tags.includes(selectedTag));
  }, [sortedPosts, selectedTag]);

  const postPreviews = filteredPosts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <section>
      <div className="text-2xl font-bold mb-6 border-b pb-2">
        {" "}
        🕹️ Blog Posts
      </div>{" "}
      <br />
      {/* 1. 태그 선택 버튼 부분 */}
      <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
        {/* 'All' 버튼 */}
        <LinkButton
          // URL 변경 대신 상태 변경 함수 호출
          onClick={() => setSelectedTag("all")}
          href="#" // 더 이상 URL 변경을 유도하지 않기 위해 더미 URL 혹은 제거
          text="All"
          icon={null}
          selected={selectedTag === "all"}
        />
        {/* 개별 태그 버튼 */}
        {tags.map((tag) => (
          <LinkButton
            key={tag}
            // URL 변경 대신 상태 변경 함수 호출
            onClick={() => setSelectedTag(tag)}
            href="#"
            text={tag}
            icon={null}
            selected={selectedTag === tag}
          />
        ))}
      </div>
      <br />
      {/* 2. 필터링된 포스트 프리뷰 부분 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
      <div className="my-16 border-t pt-8"></div>
    </section>
  );
}
