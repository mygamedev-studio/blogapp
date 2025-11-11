import Link from "next/link";

const LinkButton = ({
  href,
  text,
  icon,
  selected = false,
  onClick,
}: {
  href: string;
  text: string;
  icon: any;
  selected?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Link href={href} onClick={onClick}>
      <div
        className={`flex h-10 ${selected ? "bg-slate-600" : "bg-slate-800"}  rounded-md items-center justify-center p-4 hover:bg-slate-600  duration-300 shadow-inner shadow-slate-600`}
      >
        {icon} {text}
      </div>
    </Link>
  );
};

export default LinkButton;
