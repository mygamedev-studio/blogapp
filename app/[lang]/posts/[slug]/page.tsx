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
import CustomFooter from "@/components/Footer";
import { i18n, type Locale } from "../../../../i18n-config";

const getPostContent = async (slug: string, locale: string) => {
  const folder = `posts/${locale}/`;
  const file = `${folder}${slug}.md`;
  try {
    const content = await fs.readFile(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
  } catch (e) {
    return null;
  }
};

export const generateStaticParams = async () => {
  const params = [];
  for (const locale of i18n.locales) {
    const posts = getPostMetadata(locale);
    for (const post of posts) {
      params.push({
        lang: locale,
        slug: post.slug,
      });
    }
  }
  return params;
};

const PostPage = async (props: { params: Promise<{ lang: string; slug: string }> }) => {
  const { lang, slug } = (await props.params) as { lang: Locale; slug: string };
  const post = await getPostContent(slug, lang);

  if (!post) {
    notFound();
  }

  const allPosts: PostMetaData[] = getPostMetadata(lang);
  const currentPostMetaData = allPosts.find((post) => post.slug === slug);
  if (!currentPostMetaData) {
    notFound();
  }

  const allTags = Array.from(new Set(allPosts.flatMap(p => p.tags)));
  const seriesTag = currentPostMetaData.tags.find((tag) => tag !== "blog"); 

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
        locale={lang}
      />
      <div className="text-white">
        <h1 className="text-3xl ">{post.data.title}</h1>
        <br />
        <p>
          {new Date(post.data.date)
            .toLocaleDateString(lang === 'ko' ? "ko-KR" : lang === 'ja' ? "ja-JP" : "en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replace(/\. /g, "-")
            .replace(/\./, "")}
        </p>

        <article className="prose prose-invert lg:prose-xl">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
      <SeriesNavigation seriesPosts={sortedSeriesPosts} currentSlug={slug} locale={lang} />
      <CustomFooter locale={lang} />
    </div>
  );
};

export default PostPage;
