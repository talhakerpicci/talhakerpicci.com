export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    image: string;
    alt: string;
  };
  shortBio: string;
  email: string;
  fullBio: string;
  location: string;
  resumeURL: string;
  usage: string;
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  logo: string;
  coverImage: {
    image: string;
    alt: string | null;
  };
  description: string;
};

export type PostType = {
  _id: string;
  _createdAt: string;
  _updatedAt?: string;
  title: string;
  slug: string;
  description: string;
  canonicalLink?: string;
  date?: string;
  coverImage: {
    image: string;
    alt: string | null;
  };
  tags: string[];
  author: {
    name: string;
    photo: {
      image: string;
      alt: string;
    };
    twitterUrl: string;
  };
  body: string;
  featured: boolean;
  isPublished: boolean;
};

export type HeroeType = {
  _id: string;
  _createdAt: string;
  name: string;
  url: string;
  met: boolean;
};

export type SkillProps = {
  name: string;
  icon: React.ElementType;
  color: string;
}
