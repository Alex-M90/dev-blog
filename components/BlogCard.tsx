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
        <div className="bg-stone-200 p-5 rounded cursor-pointer">
          <h1 className="text-gray-900 text-3xl font-semibold">{title}</h1>
          <p className="text-gray-700">{desc}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
