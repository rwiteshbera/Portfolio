import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  blog: any;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <div className="relative">
      <div className="flex absolute top-2 left-2 gap-x-1">
        <div className="p-[6px] bg-[#ff605c] rounded-full"></div>
        <div className="p-[6px] bg-[#ffbd44] rounded-full"></div>
        <div className="p-[6px] bg-[#00ca4e] rounded-full"></div>
      </div>
      <div className="flex flex-wrap gap-x-2 justify-center items-center rounded-xl p-5 w-96 h-80 bg-secondary text-white">
        <h1 className="text-center text-xl font-semibold">{blog?.title}</h1>
        <p className="text-base">{blog?.description}</p>
        <Link href={blog?.url ?? `https://dev.to/rwiteshbera}`} target="_blank">
          <h4 className="border-2 border-gray-300 py-1 px-2 rounded-md m-1 cursor-pointer hover:bg-gray-300 hover:text-black ease-in duration-200">
            Dev.to
          </h4>
        </Link>
        <Link
          href={blog?.canonical_url ?? "https://blog.rwiteshbera.com"}
          target="_blank"
        >
          <h4 className="border-2 border-gray-300 py-1 px-2 rounded-md m-1 cursor-pointer hover:bg-gray-300 hover:text-black ease-in duration-200">
            Hashnode
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
