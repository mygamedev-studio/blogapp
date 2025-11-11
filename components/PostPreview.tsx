import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

const PostPreview = (props: PostMetaData) => {
  return (
    <Link href={`/posts/${props.slug}`}>
      <div className="flex h-36 flex-col justify-between rounded-md bg-slate-800 p-4 shadow-inner shadow-slate-600">
        <div className="grow">
          <h2 className="truncate font-bold text-blue-300 hover:underline">
            {props.title}
          </h2>
          <p className="mt-2 line-clamp-2 text-slate-400">{props.subtitle}</p>
        </div>
        <p className="text-sm text-slate-500">
          {new Date(props.date)
            .toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replace(/\. /g, "-")
            .replace(/\./, "")}
        </p>
      </div>
    </Link>
  );
};

export default PostPreview;
