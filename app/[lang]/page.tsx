import Link from "next/link";
import { getPostMetadata } from "@/components/getPostMetaData";
import PostPreview from "@/components/PostPreview";
import PostFilterContainer from "@/components/PostFilterContainer";
import CustomFooter from "@/components/Footer";
import NextJsPostList from "@/components/NextJsPostList";
import { Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";

export const dynamic = "force-static";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = (await params) as { lang: Locale };
  const postMetadata = getPostMetadata(lang);
  const dict = getDictionary(lang);
  
  const sortedPosts = postMetadata.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const nextjsPosts = sortedPosts.filter((post) =>
    post.tags.includes("nextjs"),
  );

  const recentPosts = sortedPosts
    .slice(0, 2)
    .map((post) => <PostPreview key={post.slug} {...post} locale={lang} />);

  const flameEngineStartPost = sortedPosts.findLast((post) =>
    post.tags.includes("FlameEngine"),
  );
  const flameEngineStartLink = flameEngineStartPost
    ? `/${lang}/posts/${flameEngineStartPost.slug}`
    : "#j";

  return (
    <main className="container mx-auto">
      <section
        id="hero"
        className="py-4 px-4 my-8 text-center bg-gray-800 rounded-2xl shadow-lg "
      >
        <div className="text-2xl tracking-tight">
          <p>{dict.hero.title1}</p>
          <p>{dict.hero.title2}</p>
          <p>{dict.hero.title3}</p>
        </div>
        <div className="text-xl text-slate-400 max-w-2xl mx-auto mb-6">
          <p>{dict.hero.desc1}</p>
          <p>{dict.hero.desc2}</p>
        </div>
        <Link href={flameEngineStartLink} passHref>
          <button className="bg-blue-600 hover:bg-blue-800 text-white py-3 px-8 rounded-md text-lg transition duration-300 shadow-xl shadow-slate-700 cursor-pointer">
            <p>{dict.hero.button1}</p>
            <p>{dict.hero.button2}</p>
          </button>
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">{dict.recentUpdate}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentPosts}
        </div>
        <div className="my-16 border-t pt-8"></div>
      </section>

      <section>
        <div className="text-2xl font-bold mb-6 border-b pb-2">
          <h2>{dict.sideContents.title}</h2>
          <p>{dict.sideContents.subtitle}</p>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          {dict.sideContents.desc}
        </p>
        <NextJsPostList posts={nextjsPosts} locale={lang} />
        <div className="my-16 border-t pt-8"></div>
      </section>

      <section>
        <PostFilterContainer sortedPosts={sortedPosts} locale={lang} />
      </section>
      <CustomFooter locale={lang} />
    </main>
  );
}
