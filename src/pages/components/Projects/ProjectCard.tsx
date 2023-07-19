import Image from "next/image";
import Link from "next/link";
import React from "react";
import linkSVG from "../../assets/link1.svg";

type Props = {
  project: any;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="relative">
      <div className="flex absolute top-2 left-2 gap-x-1">
        <div className="p-[6px] bg-[#ff605c] rounded-full"></div>
        <div className="p-[6px] bg-[#ffbd44] rounded-full"></div>
        <div className="p-[6px] bg-[#00ca4e] rounded-full"></div>
      </div>
      <div className="flex flex-col justify-center rounded-xl  p-5 w-96 h-96 bg-secondary">
        <Link href={project?.link ?? "/"} target="_blank">
          <div className="flex flex-row justify-center items-center gap-2">
            <h1 className="text-center text-xl font-semibold">
              {project?.name}
            </h1>

            <Image className="hover:scale-150 ease-in duration-200" src={linkSVG} alt="github link" height={24} />
          </div>
        </Link>
        <div className="flex flex-wrap mt-2 justify-center">
          <p className="text-base text-justify my-2">{project?.description}</p>
          {project?.tech?.map((item: any, index: number) => {
            return (
              <h4
                key={index}
                className="border-2 border-gray-300 py-1 px-2 rounded-md m-1 cursor-pointer hover:bg-gray-300 ease-in duration-200 hover:text-black"
              >
                {item}
              </h4>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
