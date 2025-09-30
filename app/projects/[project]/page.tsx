import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../data/data";
import Project from "./project";

type Props = {
  params: Promise<{
    project: string;
  }>;
};

const fallbackImage: string =
  "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/public/images/illustrations/projects.png";

export async function generateStaticParams() {
  return projects.map((project) => ({
    project: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { project: slug } = await params;
  const project = projects.find(project => project.slug === slug);

  if (!project) {
    notFound();
  }

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


export default async function Page({ params }: Props) {
  const { project } = await params;
  return (
    <div>
      <Project params={{
        project: project
      }} />
    </div>
  );
}
