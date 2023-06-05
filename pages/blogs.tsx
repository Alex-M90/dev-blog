import BlogCard from "@/components/BlogCard";
import { NextPage } from "next";

interface Props {}

const Blogs: NextPage<Props> = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      <BlogCard title="This is my blog" desc="This is my description" />
      <BlogCard title="This is my blog" desc="This is my description" />
      <BlogCard title="This is my blog" desc="This is my description" />
    </div>
  );
};

export default Blogs;
