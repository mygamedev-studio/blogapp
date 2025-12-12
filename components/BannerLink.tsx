import Link from "next/link";

const BannerLink = ({
  href,
  text,
  imageSrc,
}: {
  href: string;
  text: string;
  imageSrc: any;
}) => {
  return (
    <div className="flex justify-center">
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-4 border rounded-md px-4 hover:bg-slate-600 !no-underline"
        style={{ textDecoration: 'none' }}
      >
        <img src={imageSrc} className="h-30 w-auto object-contain !my-2 rounded-md" alt={text} />
        <p className="text-2xl font-bold !m-0" style={{ textDecoration: 'none' }}>{text}</p>
      </Link>
    </div>
  );
};

export default BannerLink;
