import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://buiducnhat.github.io", // replace this with your deployed domain
  author: "Nhat Bui",
  profile: "https://buiducnhat.github.io",
  desc: "Portfolio of Nhat Bui",
  title: "Nhat Bui",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/buiducnhat/portfolio/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/buiducnhat",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/buiducnhat47",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/buiducnhat",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:nhaths4701@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/gerpann/",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Telegram",
    href: "http://t.me/buiducnhat",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];

export const OBJECTIVE =
  "I have about 4 years of experience working in IT field. I can work as Fullstack Developer with main tech-stack are NodeJs, NestJS, .NET, React/Next.js, VueJs and also experienced with Cloud Server for building high-scalable Web application or system. I am an Open Source lover, who always try to bring new things to the community";
