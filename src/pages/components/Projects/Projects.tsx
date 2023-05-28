import React from "react";
import ProjectCard from "./ProjectCard";
import useSWR from "swr";

type Props = {};

type ProjectItem = {
  name: string;
  description: string;
  tech: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Projects = (props: Props) => {
  const { data, isLoading, error } = useSWR("/api/staticData", fetcher);

  if (error) return <div className="text-center">Failed to load projects</div>;
  if (isLoading) return <div className="text-center">Loading...</div>;

  return (
    <div className="w-screen mt-20">
      <h3 className="uppercase tracking-[20px] text-gray-300 text-2xl font-semibold text-center">
        Projects
      </h3>
      <div className="flex flex-row gap-5 justify-center my-5 flex-wrap">
        {data.projects?.map((project: ProjectItem, i: number) => {
          return <ProjectCard project={project} key={i}/>;
        })}
      </div>
    </div>
  );
};

export default Projects;


