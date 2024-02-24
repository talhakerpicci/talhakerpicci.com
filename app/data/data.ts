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
        image: "/images/illustrations/home.png",
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
        tagline: "A mobile app to organize, track, and enhance your reading experience.",
        projectUrl: "",
        logo: "/images/apps/simple-library/logo.png",
        description: `
        <p>Simple Library is a personal digital library app that helps you to keep track of your books with attractive features and provides you to build a continuous reading habit.</p>
        <br>
        <p>Simple Library stores all your books in the cloud, therefore you never lose access to your books! In addition to that, your highlights, collections, goals, and customized genres are also securely preserved!</p>
        <br>
        <p>Simple Library offers many features, as follows:</p>
        <br>
        <ul>
            <li><strong>High Customization Ability</strong>: Each book has many attributes, like author name, total pages, your current position, genre, date started, date finished, etc. Simple Library provides you the ability to customize your library the way you wish.</li>
            <br>
            <li><strong>Create Highlights For Each Book</strong>: Throw away your pens and papers, since Simple Library lets you create highlights for each book. Scanning the page with the scan feature is enough to extract the desired text section from the page!</li>
            <br>
            <li><strong>Set Goals</strong>: Simple Library lets you create daily, monthly, yearly goals, and helps you to build a continuous reading habit.</li>
            <br>
            <li><strong>View Your Reading Statistics</strong>: You can view stats that show general and detailed information about your books in your library and your reading habit.</li>
            <br>
            <li><strong>Create Collections</strong>: Simple Library offers you the ability to create and manage book collections.</li>
            <br>
            <li><strong>Reading Reminders</strong>: You can create specific reminders for each book.</li>
            <br>
            <li><strong>Graphs</strong>: View detailed graphs about your reading habits and your library.</li>
            <br>
            <li><strong>Filter and Detailed Search</strong>: Easily filter and search your books.</li>
        </ul>
        `,
        googlePlay: "https://play.google.com/store/apps/details?id=com.talhakerpicci.simplelibrary",
        appStore: "",
        webApp: "",
        github: "https://github.com/talhakerpicci/simple_library",
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
        tagline: "Auction app with real-time bidding, direct chats, and a user-centric design.",
        projectUrl: "",
        logo: "/images/apps/house-of-auctions/logo.png",
        description: `
        <p>
            <strong>House of Auctions</strong> is a mobile application I developed to bridge the gap between sellers and enthusiastic buyers in the auction world.
        </p>
        <br>
        <p>
            Key features and achievements of this project include:
        </p>
        <br>
        <ul>
            <li>Enabling users to <em>list items for auction</em> with comprehensive details, starting bid, and a set duration for the auction.</li>
            <br>
            <li>Facilitating real-time bidding, ensuring users can <em>engage in dynamic auctions</em> and place immediate bids.</li>
            <br>
            <li>Integrated chat functionality allowing buyers and sellers to communicate directly, ensuring transparency and clarity in transactions.</li>
            <br>
            <li>Designing a user-centric interface, accommodating both seasoned auction enthusiasts and first-time users.</li>
        </ul>
        `,
        googlePlay: "",
        appStore: "",
        webApp: "",
        github: "https://github.com/talhakerpicci/house-of-auctions-flutter",
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
        tagline: "App merging company feeds with rewards, boosting reach.",
        projectUrl: "",
        logo: "/images/apps/brand-ambassador/logo.png",
        description: `
        <p>
            <strong>Brand Ambassador</strong> is a mobile application I architected to elevate a company's social media presence in an organic manner. This app serves as a bridge, connecting companies directly with their target demographic by showcasing the company's latest posts from platforms such as Twitter and LinkedIn right within the app.
        </p>
        <br>
        <p>
            Distinct features of the "Brand Ambassador" project are:
        </p>
        <br>
        <ul>
            <li>Efficient aggregation of a company's most recent social media posts from Twitter and LinkedIn, making them readily accessible in one place.</li>
            <br>
            <li>An immersive user interface that presents these posts in an intuitive manner, fostering higher levels of engagement.</li>
            <br>
            <li>A thoughtfully implemented reward system that incentivizes users for their interactions, be it liking, commenting, or retweeting the displayed posts.</li>
        </ul>
        `,
        googlePlay: "",
        appStore: "",
        webApp: "",
        github: "",
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
        tagline: "Siemens E-Magazine: Browse, search, and save Siemens digital editions.",
        projectUrl: "",
        logo: "/images/apps/siemens-e-magazine/logo.png",
        description: `
        <p>
            <strong>Siemens E-Magazine</strong> is a comprehensive mobile application I developed to offer an immersive reading experience for all Siemens e-magazines. Designed to simplify the journey from discovery to reading, this app provides an all-in-one platform for avid readers and enthusiasts keen on staying updated with the latest from Siemens.
        </p>
        <br>
        <p>
            Key features of the "Siemens E-Magazine" include:
        </p>
        <br>
        <ul>
            <li>A centralized library showcasing all available Siemens e-magazines, allowing users to swiftly browse through the vast collection.</li>
            <br>
            <li>An intuitive search functionality that makes finding specific topics or magazine editions a breeze.</li>
            <br>
            <li>The favoriting feature lets users bookmark their preferred magazines, enabling quick access for future reads.</li>
        </ul>
        `,
        googlePlay: "",
        appStore: "",
        webApp: "",
        github: "",
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
        tagline: "Mobile app for farm animal management and storage tracking.",
        projectUrl: "",
        logo: "/images/apps/animal-farm/logo.png",
        description: `
        <p>
            <strong>Animal Farm</strong> is a meticulously designed mobile application I crafted to revolutionize the management of farm animals and storage inventory. Aimed at streamlining farm operations, it serves as a digital companion for farmers and agricultural enthusiasts.
        </p>
        <br>
        <p>
            Noteworthy features of "Animal Farm" encompass:
        </p>
        <br>
        <ul>
            <li>An integrated dashboard showcasing intuitive graphs that provide a quick snapshot of the animal count, helping users comprehend their livestock's growth and dynamics.</li>
            <br>
            <li>User management capabilities ensuring that various stakeholders, from farmhands to managers, have tailored access to the app's functionalities.</li>
            <br>
            <li>A robust search mechanism complemented by detailed filters, making the task of locating specific animals or items in storage a straightforward affair.</li>
        </ul>
        `,
        googlePlay: "",
        appStore: "",
        webApp: "",
        github: "",
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

export const images = 9;

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
