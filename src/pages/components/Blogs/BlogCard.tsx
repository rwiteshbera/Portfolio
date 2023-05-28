import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  blog: any;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <div className="border-4 rounded-xl border-gray-600 p-5 w-96 bg-black">
        <h1 className="text-center text-xl font-semibold">{blog.title}</h1>
      <p className="text-base text-justify my-2">{blog.description}</p>
      <div className="flex flex-wrap gap-x-2">
        <Link href={blog.url} target="_blank">
          <h4 className="border-2 border-gray-300 py-1 px-2 rounded-md m-1 cursor-pointer hover:bg-white hover:text-black">
            Dev.to
          </h4>
        </Link>
        <Link href={blog.canonical_url} target="_blank">
          <h4 className="border-2 border-gray-300 py-1 px-2 rounded-md m-1 cursor-pointer hover:bg-white hover:text-black">
            Hashnode
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
