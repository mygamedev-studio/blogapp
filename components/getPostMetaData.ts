import fs from "fs";
import matter from "gray-matter";
import { PostMetaData } from "./PostMetaData";

export const getPostMetadata = (locale: string = "ko"): PostMetaData[] => {
  const folder = `posts/${locale}`;
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${locale}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      tags: matterResult.data.tags as string[],
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

export const getAllUniqueTags = (): string[] => {
  const allPosts = getPostMetadata("ko"); // 모든 포스트 메타데이터를 가져옵니다.
  const tagsSet = new Set<string>();

  allPosts.forEach((post) => {
    // 각 포스트의 태그 배열을 순회하며 Set에 추가합니다.
    post.tags.forEach((tag) => {
      tagsSet.add(tag);
    });
  });

  // Set을 배열로 변환하여 반환합니다. (중복 자동 제거)
  return Array.from(tagsSet)
    .sort()
    .filter((tag) => tag !== "blog");
};
