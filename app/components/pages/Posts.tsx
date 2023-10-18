import Image from "next/image";
import Link from "next/link";
import { PostType } from "@/types";
import EmptyState from "../shared/EmptyState";
import { BiCalendar, BiTime } from "react-icons/bi";
import { formatDate } from "../../utils/date";

const fallbackImage: string =
  "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/public/illustrations/blog.png";

export default async function Posts() {
  const posts: PostType[] = [
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
    <section>
      {posts.length > 0 ? (
        <div className="flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12 mb-12">
          {posts.map((post) =>
            post.isPublished !== true ? null : (
              <article key={post._id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex lg:flex-row flex-col lg:items-center items-start gap-8 dark:bg-primary-bg bg-secondary-bg p-6 rounded-lg border dark:border-zinc-800 border-zinc-200 group"
                >
                  <div className="relative lg:w-[450px] lg:h-52 w-full h-56 overflow-hidden rounded-md dark:bg-zinc-800 bg-zinc-100 group">
                    <Image
                      src={post.coverImage?.image || fallbackImage}
                      className="object-cover group-hover:scale-125 duration-300"
                      alt={post.coverImage?.alt || post.title}
                      layout="fill"
                    />
                  </div>
                  <div className="max-w-lg">
                    <h2 className="max-w-sm text-2xl font-semibold tracking-tight mb-4">
                      {post.title}
                    </h2>
                    <p className="dark:text-zinc-400 text-zinc-600 text-[15.5px]">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-x-4 mt-3 text-sm">
                      <div className="flex items-center gap-x-2">
                        <BiCalendar />
                        <time
                          dateTime={post.date ? post.date : post._createdAt}
                        >
                          {post.date
                            ? formatDate(post.date)
                            : formatDate(post._createdAt)}
                        </time>
                      </div>
                      {/* <div className="flex items-center gap-x-2">
                        <BiTime />
                        <p className="">5 min</p>
                      </div> */}
                    </div>
                  </div>
                </Link>
              </article>
            )
          )}
        </div>
      ) : (
        <EmptyState value="Blog Post" />
      )}
    </section>
  );
}
