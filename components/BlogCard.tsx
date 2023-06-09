import Link from "next/link";
import { FC } from "react";

interface Props {
  title: string;
  desc: string;
  slug: string;
}

const BlogCard: FC<Props> = ({ title, desc, slug }): JSX.Element => {
  return (
    <Link legacyBehavior href={"/blogs/" + slug}>
      <a className="block">
        <div className="border-2 border-indigo-600 p-5 rounded cursor-pointer hover:bg-indigo-200">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="">{desc}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
