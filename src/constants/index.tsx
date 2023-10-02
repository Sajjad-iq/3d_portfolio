import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    googlePlus,
    shortly,
    animelibrary
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Creative Thinking",
        icon: mobile,
    },
    {
        title: "Flexibility",
        icon: backend,
    },
    {
        title: "Passion",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },

    {
        name: "git",
        icon: git,
    },

];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Google Plus",
        description: "FullStack social media app . Google Plus is the old famous social media platform by Google that helps people do whatever they want. Anyone like me who loved this platform will be happy to use it again.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Node Js",
                color: "green-text-gradient",
            },
            {
                name: "Styled Components",
                color: "pink-text-gradient",
            },
        ],
        liveLink: "https://googleplus.onrender.com/",
        image: googlePlus,
        source_code_link: "https://github.com/Sajjad-iq/google_plus_client_side/",
    },

    {
        name: "Anime Library",
        description:
            "Anime Library is a web app that helps people find their favorite anime with brief and many details by sorting lists and recommendations and infinite scrolling results of clickable cards.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restApi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        liveLink: "https://sajjad-iq.github.io/anime-library/",
        image: animelibrary,
        source_code_link: "https://github.com/Sajjad-iq/anime-library/tree/master",
    },
    {
        name: "Shortly",
        description: "Shortly is a web app that helps people with their long links and makes them short fast in a very simple technique. This app is a challenge from the front-end-mentor website.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "Styled Components",
                color: "pink-text-gradient",
            },
        ],
        liveLink: "https://sajjad-iq.github.io/url-shorting/",

        image: shortly,
        source_code_link: "https://github.com/Sajjad-iq/url-shorting",
    },
];

export { services, technologies, experiences, testimonials, projects };