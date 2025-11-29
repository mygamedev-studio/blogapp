import { MetadataRoute } from "next";
import { getPostMetadata } from "@/components/getPostMetaData";
import { i18n } from "../i18n-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // 블로그의 기본 URL을 입력해주세요.
  const baseUrl = "https://your-blog-url.com";

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of i18n.locales) {
    // 1. 정적 페이지 (홈)
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    });

    // 2. 동적 페이지 (블로그 게시물)
    const posts = getPostMetadata(locale);
    const postRoutes = posts.map((post) => ({
      url: `${baseUrl}/${locale}/posts/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
    routes.push(...postRoutes);

    // 3. 태그 페이지 (선택 사항이지만 권장)
    const tags = [...new Set(posts.flatMap((post) => post.tags))];
    const tagRoutes = tags.map((tag) => ({
      url: `${baseUrl}/${locale}/?tag=${tag}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));
    routes.push(...tagRoutes);
  }

  return routes;
}
