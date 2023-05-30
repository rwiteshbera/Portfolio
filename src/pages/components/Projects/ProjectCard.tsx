import Image from "next/image";
import Link from "next/link";
import React from "react";
import linkSVG from "../../assets/link.svg";

type Props = {
  project: any;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="border-2 rounded-xl border-[#808080] p-5 w-96 bg-black">
      <div className="flex flex-row justify-center gap-2">
        <h1 className="text-center text-xl font-semibold">{project?.name}</h1>
        <Link href={project?.link ?? '/'} target="_blank">
          <Image src={linkSVG} alt="github link" height={24} />
        </Link>
      </div>
      <p className="text-base text-justify my-2">{project?.description}</p>
      <div className="flex flex-wrap gap-x-2">
        {project?.tech?.map((item: any, index: number) => {
          return (
            <h4
              key={index}
              className="border-2 border-[#808080] py-1 px-2 rounded-md m-1 cursor-pointer hover:border-white hover:bg-white hover:text-black"
            >
              {item}
            </h4>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
