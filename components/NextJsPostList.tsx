"use client";

import { useState } from "react";
import { PostMetaData } from "./PostMetaData";
import PostPreview from "./PostPreview";

interface NextJsPostListProps {
  posts: PostMetaData[];
}

export default function NextJsPostList({ posts }: NextJsPostListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visiblePosts = isExpanded ? posts : posts.slice(0, 2);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visiblePosts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
      {posts.length > 2 && !isExpanded && (
        <div className="text-center mt-8">
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-slate-800 p-4 shadow-inner shadow-slate-600 hover:bg-slate-600 text-slate-400 py-2 px-6 rounded-md transition duration-300"
          >
            더보기
          </button>
        </div>
      )}
    </>
  );
}
