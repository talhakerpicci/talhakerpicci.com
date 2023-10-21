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
  location: string;
  resumeURL: string;
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
  description: string;
  googlePlayImage: boolean;
  appStoreImage: boolean;
  webAppImage: boolean;
  githubImage: boolean;
  screenshots: string[];
};

export type PostType = {
  id: string;
  createdAt: string;
  updatedAt?: string;
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

export type SkillProps = {
  name: string;
  icon: React.ElementType;
  color: string;
}
