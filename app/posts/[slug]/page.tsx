import fs from "fs/promises";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { getPostMetadata } from "@/components/getPostMetaData";

const getPostContent = async (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = await fs.readFile(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

// 페이지 컴포넌트를 async 함수로 변경합니다.
const PostPage = async (props: any) => {
  // `props.params`가 Promise이므로 `await`를 사용하여 값을 얻습니다.
  const { slug } = await props.params;
  console.log("slug:" + slug);
  const post = await getPostContent(slug);
  return (
    <div className="text-slate-400">
      <h1 className="text-3xl ">{post.data.title}</h1>
      <article className="prose prose-invert lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
