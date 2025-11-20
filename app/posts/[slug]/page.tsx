import fs from "fs/promises";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import {
  getAllUniqueTags,
  getPostMetadata,
} from "@/components/getPostMetaData";
import { PostMetaData } from "@/components/PostMetaData";
import SeriesNavigation from "@/components/SeriesNavigation";
import SeriesTreeToc from "@/components/SeriesTreeToc";
import { notFound } from "next/navigation";

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

const PostPage = async (props: any) => {
  const { slug } = await props.params;
  const post = await getPostContent(slug);

  const allPosts: PostMetaData[] = getPostMetadata();
  const currentPostMetaData = allPosts.find((post) => post.slug === slug);
  if (!currentPostMetaData) {
    notFound();
  }

  const allTags = getAllUniqueTags();
  const seriesTag = currentPostMetaData.tags.find((tag) =>
    allTags.includes(tag),
  );

  let sortedSeriesPosts: PostMetaData[] = [];
  if (seriesTag) {
    const seriesPosts = allPosts.filter((post) =>
      post.tags.includes(seriesTag),
    );
    sortedSeriesPosts = seriesPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }

  return (
    <div>
      <SeriesTreeToc
        seriesPosts={sortedSeriesPosts.slice().reverse()}
        currentSlug={slug}
        seriesTitle={seriesTag!}
      />
      <div className="text-slate-400">
        <h1 className="text-3xl ">{post.data.title}</h1>
        <article className="prose prose-invert lg:prose-xl">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
      <SeriesNavigation seriesPosts={sortedSeriesPosts} currentSlug={slug} />
    </div>
  );
};

export default PostPage;
