import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import type { ProjectType } from "@/types";
import EmptyState from "../components/shared/EmptyState";
import { Slide } from "../animation/Slide";

export const metadata: Metadata = {
  title: "Projects | Talha Kerpicci",
  metadataBase: new URL("https://talhakerpicci.com/projects"),
  description: "Explore projects built by Talha Kerpicci",
  openGraph: {
    title: "Projects | Talha Kerpicci",
    url: "https://talhakerpicci.com/projects",
    description: "Explore projects built by Talha Kerpicci",
    images:
      "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/public/illustrations/projects.png",
  },
};

export default async function Project() {
  const projects: ProjectType[] = [
    {
      _id: "pr1",
      name: "Awesome App",
      slug: "awesome-app",
      tagline: "An app that does awesome things.",
      projectUrl: "https://awesomeapp.com",
      logo: "https://example.com/awesomeapp-logo.jpg",
      coverImage: {
        image: "https://example.com/awesomeapp-cover.jpg",
        alt: "Awesome App in action",
      },
      description: "",
    }
  ];


  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <header className="max-w-2xl mb-16">
        <Slide>
          <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
            Projects
          </h1>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            I&apos;ve worked on tons of little projects over the years but these
            are the ones that I&apos;m most proud of. Many of them are
            open-source, so if you see something that piques your interest,
            check out the code and contribute if you have ideas on how it can be
            improved.
          </p>
        </Slide>
      </header>

      <Slide delay={0.1}>
        {projects.length > 0 ? (
          <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project._id}
                className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
              >
                <Image
                  src={project.logo}
                  width={60}
                  height={60}
                  alt={project.name}
                  className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                />
                <div>
                  <h2 className="text-lg tracking-wide mb-1">{project.name}</h2>
                  <div className="text-sm dark:text-zinc-400 text-zinc-600">
                    {project.tagline}
                  </div>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <EmptyState value="Projects" />
        )}
      </Slide>
    </main>
  );
}
