import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail, LuGlobe } from "react-icons/lu";

const resume = {
  name: "Oğuzhan Özenç",
  title: "Front-end Developer",
  photo: "/profilepic.jpg",
  location: {
    city: "Istanbul",
    country: "Turkey",
    link: "https://maps.app.goo.gl/ms99iWHVgr4UxTvG6",
    remote: true,
  },
  about:
    "As a Front-End Developer skilled in HTML, CSS, JavaScript, React, and Vue.js, I specialize in creating engaging, user-friendly web applications with a strong focus on innovative design and storytelling. While my primary expertise is in frontend development, my experience with backend technologies provides me with a comprehensive understanding of full-stack development. Dedicated to continuous learning, I thrive in dynamic environments, transforming ideas into user-centric, functional, and aesthetically appealing applications.",
  skills: [
    {
      title: "Front-end",
      items: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React.js",
        "VueJS",
        "Firebase",
      ],
    },
    {
      title: "Additional Skills",
      items: [
        "Node.js",
        "Express",
        "Firebase Authentication",
        "Firestore",
        "RESTful APIs",
      ],
    },
    {
      title: "Version Control",
      items: ["Git", "GitHub"],
    },
    {
      title: "Design",
      items: [
        "Responsive Design",
        "Interactive Design",
        "UI/UX Understanding",
        "Figma",
      ],
    },
    {
      title: "Principles & Methodologies",
      items: ["Agile Methodologies", "Scrum Principles", "Product Development"],
    },
  ],
  certification: {
    title: "The Frontend Developer Career Path Certification",
    date: "2023-2024",
    provider: "https://v2.scrimba.com/the-frontend-developer-career-path-c0j",
    description:
      "Certified in collaboration with Mozilla MDN, covering comprehensive training in HTML, CSS, JavaScript, React, APIs, Web architecture, Responsive design, UI Design, and Git.",
    link: "https://scrimba.com/certificate/uLzBgDcK/gfrontend",
  },
  socialMedia: [
    {
      title: "email",
      shorturl: "oguzhanozenc10@gmail.com",
      url: "mailto:oguzhanozenc10@gmail.com",
      icon: <LuMail />,
    },

    {
      title: "portfolio",
      shorturl: "oguzhanozenc.me",
      url: "https://oguzhanozenc.me/",
      icon: <LuGlobe />,
    },
    {
      title: "linkedin",
      shorturl: "/oguzhanozenc",
      url: "https://www.linkedin.com/in/oguzhanozenc/",
      icon: <FaLinkedin />,
    },
    {
      title: "github",
      shorturl: "/oguzhanozenc",
      url: "https://github.com/oguzhanozenc",
      icon: <FaGithub />,
    },
  ],
  workExperience: [
    {
      company: "Homebody - E-commerce Web App",
      date: "July 2024 - Present",
      type: "Remote",
      position: "Freelance Front-end Developer",
      responsibilities: [
        "Developing a responsive, retro-themed e-commerce website for a t-shirt business.",
        "Designing and implementing a visually engaging landing page.",
        "Creating product pages for apparel and accessories to enhance navigation.",
        "Integrating a blog section using Netlify CMS for content management.",
        "Setting up Shopify for e-commerce functionality, including custom front-end development.",
        "Preparing for final testing and optimization to ensure a launch-ready website.",
      ],
      technologiesUsed: [
        "Vite",
        "Node.js",
        "React.js",
        "React Router",
        "Shopify Backend",
        "Netlify (Decap) CMS",
        "Mailchimp",
      ],
      status:
        "In Progress: Landing page completed. Upcoming milestones include product pages, blog integration, e-commerce setup, and final review.",
    },
    {
      company: "Offbeat Security",
      date: "April 2024 - Present",
      type: "Remote",
      position: "Freelance Front-end Developer",
      responsibilities: [
        "Leading front-end development for a blockchain security web application.",
        "Developed dynamic, responsive interfaces using React Router, which reduced page load times by 20% and provided a smoother user experience through client-side navigation.",
        "Customized Netlify (Decap) CMS for content management.",
        "Adding a blog subscription feature for user engagement.",
        "Managing the project lifecycle from concept to deployment.",
      ],
      achievements: [
        "Delivered a dynamic web application tailored to blockchain security needs.",
        "Enhanced user engagement through custom features and efficient content management.",
        "Successfully launched the application within the projected timeline.",
      ],
      technologiesUsed: [
        "Vite",
        "Node.js",
        "React.js",
        "React Router",
        "React Awesome Reveal",
        "React-Slick",
        "React Accessible Accordion",
        "React Markdown",
        "Netlify (Decap) CMS",
        "Mailchimp",
        "Substack",
      ],
    },
    {
      company: "Beko Corporate",
      date: "2021 - 2023",
      type: "Full-time",
      position: "Research and Development Engineer",
      responsibilities: [
        "Utilized agile methodologies for sustainable product development.",
        "Researched and adopted new technologies, analyzed market trends, and developed technology roadmaps.",
        "Prepared academic writings, patent applications, and technical reports.",
        "Collaborated with partners to ensure projects met industry standards and sustainability goals.",
      ],
      technologiesUsed: [],
    },
  ],
  education: [
    {
      institution: "Anadolu University",
      degree: "Bachelor's Degree in Management Information Systems",
      relevantCourses:
        "Internet and Web Programming, User Experience Design, Information Technologies, Project Management",
      date: "2023 - 2026",
    },
    {
      institution: "Istanbul Technical University",
      degree: "Bachelor's Degree in Engineering",
      date: "2015 - 2020",
    },
  ],
  projects: [
    {
      name: "Offbeat Security",
      link: "https://offbeatsecurity.xyz/demo",
      description:
        "A blockchain security web application designed to provide users with dynamic, responsive interfaces and enhanced engagement through custom features.",
      role: "Lead Front-end Developer",
      technologiesUsed: ["Vite", "React.js", "Node.js", "Netlify (Decap) CMS"],
    },
    {
      name: "Homebody - in development",
      link: "https://welcomehomebody.com/",
      description:
        "A responsive e-commerce platform for a retro-themed t-shirt business, featuring a blog and subscription features to enhance customer engagement.",
      role: "Lead Front-end Developer",
      technologiesUsed: [
        "Vite",
        "React.js",
        "Node.js",
        "Shopify Backend",
        "Netlify (Decap) CMS",
      ],
    },
    {
      name: "Configuration Management Panel",
      link: "https://cw-config-management-panel.netlify.app/",
      repository: "",
      description:
        "A full-stack configuration management panel project includes user authentication, configuration management, and responsive design.",
      role: "Full Stack Developer",
      technologiesUsed: [
        "Vue.js",
        "Node.js",
        "RESTful APIs",
        "Firebase Authentication",
        "Firestore",
        "Heroku",
        "Netlify",
      ],
      loginInfo: "Login Info: reviewer@example.com |  p12345",
    },
  ],
};

export default resume;
