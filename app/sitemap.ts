import { MetadataRoute } from "next";
import { getPostMetadata } from "@/components/getPostMetaData";

export default function sitemap(): MetadataRoute.Sitemap {
  // 블로그의 기본 URL을 입력해주세요.
  const baseUrl = "https://your-blog-url.com";

  // 1. 정적 페이지 (홈)
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  // 2. 동적 페이지 (블로그 게시물)
  const posts = getPostMetadata();
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 3. 태그 페이지 (선택 사항이지만 권장)
  const tags = [...new Set(posts.flatMap((post) => post.tags))];
  const tagRoutes = tags.map((tag) => ({
    url: `${baseUrl}/?tag=${tag}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...postRoutes,
    ...tagRoutes,
  ] as MetadataRoute.Sitemap;
}
