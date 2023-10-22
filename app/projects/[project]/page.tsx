import { Metadata } from "next";
import { projects } from "../../data/data";
import Project from "./project";

type Props = {
  params: {
    project: string;
  };
};

const fallbackImage: string =
  "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/public/illustrations/projects.png";

export function generateMetadata({ params }: Props): Metadata {
  const slug = params.project;
  const project = projects[0];

  console.log("Here");
  console.log(slug);

  return {
    title: `${project.name} | Project`,
    metadataBase: new URL(`https://talhakerpicci.com/projects/${project.slug}`),
    description: project.tagline,
    openGraph: {
      images:
        fallbackImage,
      url: `https://talhakerpicci.com/projects/${project.slug}`,
      title: project.name,
      description: project.tagline,
    },
  };
}


export default function Page({ params }: Props) {
  return (
    <div>
      <Project params={{
        project: params.project
      }} />
    </div>
  );
}
