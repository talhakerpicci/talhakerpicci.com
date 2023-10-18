import Link from "next/link";
import Image from "next/image";
import type { PostType } from "@/types";

export default async function FeaturedPosts({ params }: { params?: string }) {
  const featuredPosts: PostType[] = [
    {
      _id: "po1",
      _createdAt: "2022-01-01T00:00:00Z",
      title: "My Journey in Tech",
      slug: "my-journey-in-tech",
      description: "A summary of my journey in the tech industry.",
      date: "2022-01-01",
      coverImage: {
        image: "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/app/data/images/borda.png",
        alt: "A scenic road representing a journey"
      },
      tags: ["tech", "journey", "career"],
      author: {
        name: "John Doe",
        photo: {
          image: "https://example.com/john-photo.jpg",
          alt: "Portrait of John Doe"
        },
        twitterUrl: "https://twitter.com/johndoe"
      },
      body: "",
      featured: true,
      isPublished: true
    }
  ];

  return (
    <>
      {featuredPosts.map((post) =>
        post.featured !== true || post.isPublished !== true ? null : (
          <article
            key={post._id}
            className={`mb-4 ${post.slug === params ? "hidden" : "flex lg:flex-row flex-col"
              }`}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-4 dark:bg-primary-bg bg-secondary-bg p-5 rounded-lg border dark:border-zinc-800 border-zinc-200"
            >
              <Image
                src={post.coverImage?.image}
                className="dark:bg-zinc-800 bg-zinc-100 rounded-md object-cover"
                alt={post.coverImage?.alt || post.title}
                width={400}
                height={230}
                quality={100}
                loading="lazy"
              />
              <div className="max-w-lg">
                <h2 className="max-w-sm text-lg tracking-tight mb-4">
                  {post.title}
                </h2>
                <p className="dark:text-zinc-400 text-zinc-600 text-sm">
                  {post.description.slice(0, 80).padEnd(83, "...")}
                </p>
              </div>
            </Link>
          </article>
        )
      )}
    </>
  );
}
