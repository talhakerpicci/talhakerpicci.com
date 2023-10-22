import { JobType, PostType, ProfileType, ProjectType, SkillProps } from "@/types";
import {
    BiLogoFlutter,
    BiLogoPython,
    BiLogoGoLang,
    BiLogoFirebase,
    BiLogoPostgresql,
    BiLogoGit,
    BiLogoVisualStudio,
    BiLogoFirefox,
    BiLogoGithub,
    BiLogoInstagram,
    BiLogoLinkedinSquare,
    BiLogoTwitter,
    BiLogoYoutube,
    BiLogoMedium
} from "react-icons/bi";

import ArchLinuxIcon from '../components/shared/ArchLinuxIcon';
import CSharpIcon from "../components/shared/CSharpIcon";

export const userProfile: ProfileType = {
    id: "p1",
    fullName: "Talha Kerpicci",
    headline: "Software Developer",
    profileImage: {
        image: "/avatar.png",
        alt: "Talha Kerpicci Avatar"
    },
    shortBio: "I'm Talha Kerpicci, passionately exploring mobile app development with Flutter at Borda Technology. Currently broadening my expertise with Go and developing an exciting app, called Movie Paradise.",
    email: "talha.kerpicci@gmail.com",
    location: "Istanbul, Turkey",
    resumeURL: "/Talha-Kerpicci-CV.pdf",
};

export const jobs: JobType[] = [
    {
        id: "j2",
        name: "Borda Technology: IoT for Healthcare",
        jobTitle: "Software Developer",
        logo: "/images/jobs/borda.png",
        url: "https://www.bordatech.com/",
        description: "At Borda Technology, I'm currently spearheading the development of the Lighthouse mobile application, a vital tool enabling hospital staff to expertly manage and oversee their essential assets.",
        startDate: "2021-09-5",
        endDate: ""
    },
    {
        id: "j1",
        name: "ONE Bilgi Sistemleri Ticaret A.Ş.",
        jobTitle: "Software Developer",
        logo: "/images/jobs/one.png",
        url: "https://one.com.tr/",
        description: "At One Bilgi Sistemleri, I used Flutter and Firebase to develop apps and executed web scraping tasks.",
        startDate: "2020-09-01",
        endDate: "2021-09-03"
    }
];

export const projects: ProjectType[] = [
    {
        id: "5",
        name: "Simple Library",
        slug: "simple-library",
        tagline: "Mobile app for managing farm animals and tracking items in storage with ease.",
        projectUrl: "",
        logo: "/images/apps/simple-library/logo.png",
        description: "",
        googlePlayImage: true,
        appStoreImage: false,
        webAppImage: false,
        githubImage: true,
        screenshots: [
            "/images/apps/simple-library/1.jpg",
            "/images/apps/simple-library/2.jpg",
            "/images/apps/simple-library/3.jpg",
            "/images/apps/simple-library/4.jpg",
            "/images/apps/simple-library/5.jpg",
            "/images/apps/simple-library/6.jpg",
            "/images/apps/simple-library/7.jpg",
            "/images/apps/simple-library/8.jpg",
            "/images/apps/simple-library/9.jpg",
        ],
    },
    {
        id: "4",
        name: "House of Auctions",
        slug: "house-of-auctions",
        tagline: "Mobile app for managing farm animals and tracking items in storage with ease.",
        projectUrl: "",
        logo: "/images/apps/house-of-auctions/logo.png",
        description: "",
        googlePlayImage: false,
        appStoreImage: false,
        webAppImage: false,
        githubImage: false,
        screenshots: [
            "/images/apps/house-of-auctions/1.png",
            "/images/apps/house-of-auctions/2.png",
            "/images/apps/house-of-auctions/3.png",
            "/images/apps/house-of-auctions/4.png",
            "/images/apps/house-of-auctions/5.png",
            "/images/apps/house-of-auctions/6.png",
            "/images/apps/house-of-auctions/7.png",
            "/images/apps/house-of-auctions/8.png",
            "/images/apps/house-of-auctions/9.png",
            "/images/apps/house-of-auctions/10.png",
            "/images/apps/house-of-auctions/11.png",
            "/images/apps/house-of-auctions/12.png",
            "/images/apps/house-of-auctions/13.png",
            "/images/apps/house-of-auctions/14.png",
            "/images/apps/house-of-auctions/15.png",
            "/images/apps/house-of-auctions/16.png",
        ],
    },
    {
        id: "3",
        name: "Brand Ambassador",
        slug: "brand-ambassador",
        tagline: "Mobile app for managing farm animals and tracking items in storage with ease.",
        projectUrl: "",
        logo: "/images/apps/brand-ambassador/logo.png",
        description: "",
        googlePlayImage: false,
        appStoreImage: false,
        webAppImage: false,
        githubImage: false,
        screenshots: [
            "/images/apps/brand-ambassador/1.png",
            "/images/apps/brand-ambassador/2.png",
            "/images/apps/brand-ambassador/3.png",
            "/images/apps/brand-ambassador/4.png",
            "/images/apps/brand-ambassador/5.png",
            "/images/apps/brand-ambassador/6.png",
            "/images/apps/brand-ambassador/7.png",
            "/images/apps/brand-ambassador/8.png",
            "/images/apps/brand-ambassador/9.png",
            "/images/apps/brand-ambassador/10.png",
            "/images/apps/brand-ambassador/11.png",
            "/images/apps/brand-ambassador/12.png",
            "/images/apps/brand-ambassador/13.png",
            "/images/apps/brand-ambassador/14.png",
            "/images/apps/brand-ambassador/15.png",
            "/images/apps/brand-ambassador/16.png",
            "/images/apps/brand-ambassador/17.png",
            "/images/apps/brand-ambassador/18.png",
        ],
    },
    {
        id: "2",
        name: "Siemens E-Magazine",
        slug: "siemens-e-magazine",
        tagline: "Mobile app for managing farm animals and tracking items in storage with ease.",
        projectUrl: "",
        logo: "/images/apps/siemens-e-magazine/logo.png",
        description: "",
        googlePlayImage: false,
        appStoreImage: false,
        webAppImage: false,
        githubImage: false,
        screenshots: [
            "/images/apps/siemens-e-magazine/1.png",
            "/images/apps/siemens-e-magazine/2.png",
            "/images/apps/siemens-e-magazine/3.png",
            "/images/apps/siemens-e-magazine/4.png",
            "/images/apps/siemens-e-magazine/5.png",
            "/images/apps/siemens-e-magazine/6.png",
            "/images/apps/siemens-e-magazine/7.png",
            "/images/apps/siemens-e-magazine/8.png",
            "/images/apps/siemens-e-magazine/9.png",
            "/images/apps/siemens-e-magazine/10.png",
            "/images/apps/siemens-e-magazine/11.png",
            "/images/apps/siemens-e-magazine/12.png",
            "/images/apps/siemens-e-magazine/13.png",
        ],
    },
    {
        id: "1",
        name: "Animal Farm",
        slug: "animal-farm",
        tagline: "Mobile app for managing farm animals and tracking items in storage with ease.",
        projectUrl: "",
        logo: "/images/apps/animal-farm/logo.png",
        description: "",
        googlePlayImage: false,
        appStoreImage: false,
        webAppImage: false,
        githubImage: false,
        screenshots: [
            "/images/apps/animal-farm/1.png",
            "/images/apps/animal-farm/2.png",
            "/images/apps/animal-farm/3.png",
            "/images/apps/animal-farm/4.png",
            "/images/apps/animal-farm/5.png",
            "/images/apps/animal-farm/6.png",
            "/images/apps/animal-farm/7.png",
            "/images/apps/animal-farm/8.png",
            "/images/apps/animal-farm/9.png",
            "/images/apps/animal-farm/10.png",
            "/images/apps/animal-farm/11.png",
            "/images/apps/animal-farm/12.png",
        ],
    }
];

export const posts: PostType[] = [
    /*     {
            id: "po1",
            createdAt: "2022-01-01T00:00:00Z",
            title: "My Journey in Tech",
            slug: "my-journey-in-tech",
            description: "A summary of my journey in the tech industry.",
            date: "2022-01-01",
            coverImage: {
                image: "",
                alt: "A scenic road representing a journey"
            },
            tags: ["tech", "journey", "career"],
            author: {
                name: "John Doe",
                photo: {
                    image: "",
                    alt: "Portrait of John Doe"
                },
                twitterUrl: "https://twitter.com/talhakerpicci"
            },
            body: "",
            featured: true,
            isPublished: true
        } 
    */
];

import Photo from "../../public/illustrations/photos.png";

export const images = [
    {
        id: "1",
        src: Photo,
    },
    /* {
        id: "2",
        src: "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/app/data/images/jobs/borda.png",
    },
    {
        id: "3",
        src: "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/app/data/images/jobs/borda.png",
    }, */
];

export const skills: SkillProps[] = [
    { name: 'Flutter', icon: BiLogoFlutter, color: '#46D1FD' },
    { name: 'Python', icon: BiLogoPython, color: '#3B77A8' },
    { name: 'C#', icon: CSharpIcon, color: '#9B4F96' },
    { name: 'Go', icon: BiLogoGoLang, color: '#00ACD7' },
    { name: 'Firebase', icon: BiLogoFirebase, color: '#FFCA28' },
    { name: 'Postgresql', icon: BiLogoPostgresql, color: '#336791' },
    { name: 'Linux', icon: ArchLinuxIcon, color: '#FFD133' },
    { name: 'Git', icon: BiLogoGit, color: '#F03C2E' },
    { name: 'VsCode', icon: BiLogoVisualStudio, color: '#3C99D4' },
    { name: 'Firefox', icon: BiLogoFirefox, color: '#DF731B' },
];

export const socialLinks = [
    {
        id: 1,
        name: "GitHub",
        url: "https://github.com/talhakerpicci",
        icon: BiLogoGithub,
    },
    {
        id: 2,
        name: "Twitter",
        url: "https://twitter.com/talhakerpicci",
        icon: BiLogoTwitter,
    },
    {
        id: 3,
        name: "Linkedin",
        url: "https://linkedin.com/in/talha-kerpicci",
        icon: BiLogoLinkedinSquare,
    },
    {
        id: 4,
        name: "Instagram",
        url: "https://instagram.com/talhakerpicci",
        icon: BiLogoInstagram,
    },
    {
        id: 5,
        name: "Youtube",
        url: "https://youtube.com/@talhakerpicci",
        icon: BiLogoYoutube,
    },
    {
        id: 6,
        name: "Medium",
        url: "https://medium.com/@talhakerpicci",
        icon: BiLogoMedium,
    },
];
