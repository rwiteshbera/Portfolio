import React from "react";
import useSWR from "swr";
import BlogCard from "./BlogCard";

type Props = {};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Blogs = (props: Props) => {
  const { data, isLoading, error } = useSWR("https://dev.to/api/articles?username=rwiteshbera", fetcher);

  if (error) return <div className="text-center">Failed to load blogs</div>;
  if (isLoading) return <div className="text-center">Loading...</div>;

  return (
    <div className="w-screen mt-20">
      <h3 className="uppercase tracking-[20px] text-gray-300 text-2xl font-semibold text-center">
        Blogs
      </h3>
      <div className="flex flex-row gap-5 justify-center my-5 flex-wrap">
        {data?.map((blog: any, i: number) => {
          return <BlogCard blog={blog} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
