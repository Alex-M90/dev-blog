import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Props {}

const SinglePage: NextPage<Props> = () => {
  return <div>SinglePage</div>;
};

export const getStaticPaths: GetStaticPaths = () => {
  // reading paths
  const dirPathToRead = path.join(process.cwd(), "posts");
  const dirs = fs.readdirSync(dirPathToRead);
  const paths = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), "posts/" + filename);
    const fileContent = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
    return { params: { postSlug: matter(fileContent).data.slug } };
  });

  console.log(paths);

  return {
    paths: [{ params: { postSlug: "10-web-development-careers-to-consider" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

export default SinglePage;
