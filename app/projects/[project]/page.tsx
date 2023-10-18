import Image from "next/image";
import { Metadata } from "next";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import { CustomPortableText } from "@/app/components/shared/CustomPortableText";
import { Slide } from "../../animation/Slide";
import { projects } from "../../data/data";


type Props = {
  params: {
    project: string;
  };
};

const fallbackImage: string =
  "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/public/illustrations/projects.png";

// Dynamic metadata for SEO
export function generateMetadata({ params }: Props): Metadata {
  const slug = params.project;
  const project = projects[0];

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

export default function Project({ params }: Props) {
  const slug = params.project;
  const project = projects[0];

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <Slide>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between mb-4">
            <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-4 max-w-sm">
              {project.name}
            </h1>

            <a
              href={project.projectUrl}
              rel="noreferrer noopener"
              target="_blank"
              className={`dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 ${!project.projectUrl
                ? "cursor-not-allowed opacity-80"
                : "cursor-pointer hover:border-zinc-700"
                }`}
            >
              {project.projectUrl ? "Explore" : "Coming Soon"}
            </a>
          </div>

          <div className="relative w-full h-40 pt-[52.5%]">
            <Image
              className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover"
              layout="fill"
              src={project.coverImage?.image || fallbackImage}
              alt={project.coverImage?.alt || project.name}
              quality={100}
            />
          </div>

          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
            <PortableText
              value={project.description as any}
              components={CustomPortableText}
            />
          </div>
        </div>
      </Slide>
    </main>
  );
}
