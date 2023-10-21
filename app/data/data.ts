import { JobType, ProfileType, ProjectType, SkillProps } from "@/types";
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
    _id: "p1",
    fullName: "Talha Kerpicci",
    headline: "Software Developer",
    profileImage: {
        image: "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/app/data/images/avatar.png",
        alt: "Talha Kerpicci Avatar"
    },
    shortBio: "I'm Talha Kerpicci, passionately exploring mobile app development with Flutter at Borda Technology. Currently broadening my expertise with Go and developing an exciting app, called Movie Paradise.",
    email: "talha.kerpicci@gmail.com",
    fullBio: `
    Hey there! My name is Talha Kerpicci. I'm currently working at Borda Technology as a Flutter Developer.
    <br><br>
    I started my programming career with C# and gained experience in development of various desktop applications. In addition to that I had some experience in Unity Game Engine.
    <br><br>
    Apart from these, I started learning Python and dived into web scraping. I created some tools for myself which I have been still using in my daily life.
    <br><br>
    Moreover, I have been learning Flutter to develop mobile applications for the last few months. I'm currently working on Simple Library.
    <br><br>
    I also have a huge interest on Linux and open source community. I am very enthusiastic to learn novelties in programming and Linux!
    `,
    location: "Istanbul, Turkey",
    resumeURL: "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/app/data/Talha-Kerpicci-CV.pdf",
};

export const jobs: JobType[] = [
    {
        _id: "j1",
        name: "Borda Technology: IoT for Healthcare",
        jobTitle: "Software Developer",
        logo: "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/app/data/images/borda.png",
        url: "https://www.bordatech.com/",
        description: "At Borda Technology, I'm currently spearheading the development of the Lighthouse mobile application, a vital tool enabling hospital staff to expertly manage and oversee their essential assets.",
        startDate: "2021-09-5",
        endDate: ""
    },
    {
        _id: "j2",
        name: "ONE Bilgi Sistemleri Ticaret A.Ş.",
        jobTitle: "Software Developer",
        logo: "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/app/data/images/one.png",
        url: "https://one.com.tr/",
        description: "At One Bilgi Sistemleri, I used Flutter and Firebase to develop apps and executed strategic web scraping tasks.",
        startDate: "2020-09-01",
        endDate: "2021-09-03"
    }
];

export const projects: ProjectType[] = [
    {
        _id: "1",
        name: "Awesome App",
        slug: "awesome-app",
        tagline: "An app that does awesome things.",
        projectUrl: "https://awesomeapp.com",
        logo: "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/app/data/images/borda.png",
        coverImage: {
            image: "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/app/data/images/1.png",
            alt: "Awesome App in action",
        },
        description: "",
        googlePlayImage: "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/public/store/google-play.png",
        appStoreImage: "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/public/store/app-store.png",
        webAppImage: "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/public/store/pwa.png",
        githubImage: "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/public/store/github.png",
        screenshots: [
            "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/app/data/images/1.png",
            "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/public/illustrations/projects.png",
            "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/app/data/images/1.png",
            "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/public/illustrations/projects.png",
            "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/app/data/images/1.png",
            "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/public/illustrations/projects.png",
            "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/app/data/images/1.png",
            "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/public/illustrations/projects.png",
            "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/app/data/images/1.png",
        ],
    }
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
        url: "https://medium.com/@talha.kerpicci",
        icon: BiLogoMedium,
    },
];
