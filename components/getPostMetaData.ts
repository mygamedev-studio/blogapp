import fs from "fs";
import matter from "gray-matter";
import { PostMetaData } from "./PostMetaData";

export const getPostMetadata = (): PostMetaData[] => {
  const folder = "posts";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
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
