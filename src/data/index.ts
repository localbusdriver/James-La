import { Github, Linkedin } from "../../public/assets/icons/Icons";

export const navItems = [
  {
    name: "Projects",
    icon: "",
    link: "#projects",
    target: "_self",
  },
  {
    name: "Experience",
    icon: "",
    link: "#experience",
    target: "_self",
  },
  {
    name: "Resume",
    icon: "",
    link: "/James-La-Resume-1-page.pdf",
    target: "_blank",
  },
  {
    name: "",
    icon: Linkedin({ size: "20", fill: "#000" }),
    link: "https://www.linkedin.com/in/lajames/",
    target: "_blank",
  },
  {
    name: "",
    icon: Github({ size: "20", fill: "#000" }),
    link: "https://github.com/localbusdriver/",
    target: "_blank",
  },
];

export const heroData = {
  about: {
    id: 1,
    title: "About me",
    content:
      "As a computer science student, I have been able to develop a diverse range of projects that represent my passion and skills in this field. I have consistently delivered high-quality results. Explore my portfolio below to discover more about my work and my skills.",
  },
  technical: {
    id: 2,
    title: "Technical Skills",
    content:
      "I have experience with a variety of programming languages and frameworks. I have also worked with a range of tools and software that have allowed me to develop my skills. I am always looking for new opportunities to learn and grow as a developer.",
  },
  skills: {
    id: 3,
    skills: [
      {
        type: "Frontend",
        items: [
          "React",
          "TypeScript",
          "JavaScript",
          "Next.js",
          "Vite.js",
          "HTML/CSS",
          "TailwindCSS",
          "Bootstrap",
        ],
      },
      {
        type: "Backend",
        items: ["Python", "C++", "Java", "Node.js", "Express", "OpenCV"],
      },
      {
        type: "AI/ML",
        items: ["Pytorch", "Sci-Kit Learn", "TensorFlow"],
      },
      {
        type: "Other",
        items: [
          "AWS",
          "Google Cloud Run",
          "Bash",
          "UE5",
          "Git/Github",
          "Blender",
        ],
      },
    ],
  },
};

export const projects = [
  {
    id: 1,
    title: "O'Sushi School Lunch Order Summarizer",
    des: "Web application that summarizes the orders for O'Sushi's school lunch program.",
    img: "/assets/o-sushi-img.png",
    iconLists: [
      "/assets/icons/tailwind.svg",
      "/assets/icons/react.svg",
      "/assets/icons/nextjs.svg",
    ],
    link: "https://o-sushi.co/",
    linkType: "Website",
  },
  {
    id: 2,
    title: "Nextwork AWS Projects",
    des: "Follow me as I learn AWS with the help of NextWork!",
    img: "/assets/nextwork.png",
    iconLists: [
      "/assets/icons/nextwork_education_logo.jpeg",
      "/assets/icons/aws_icon.svg",
    ],
    link: "https://github.com/localbusdriver/nextwork-aws-projects",
    linkType: "Github Repo",
  },
  {
    id: 3,
    title: "CNN Image Classification",
    des: "Image classification using Convolutional Neural Networks",
    img: "/assets/cnn.png",
    iconLists: [
      "/assets/icons/sklearn.svg",
      "/assets/icons/pytorch.svg",
      "/assets/icons/python-logo-only.svg",
    ],
    link: "https://github.com/localbusdriver/ImageClassification",
    linkType: "Github Repo",
  },
  {
    id: 4,
    title: "Spotify Statistics",
    des: "A web application that displays your Spotify statistics using the Spotify Developer API.",
    img: "/assets/spotify-stats.png",
    iconLists: [
      "/assets/icons/tailwind.svg",
      "/assets/icons/spotify.png",
      "/assets/icons/react.svg",
      "/assets/icons/nextjs.svg",
    ],
    link: "https://spotify-web-app-five.vercel.app/",
    linkType: "Website",
  },

  {
    id: 5,
    title: "RESTFUL Web Application",
    des: "A RESTFUL Web Application using Node.js and Express",
    img: "/assets/restful.png",
    iconLists: [
      "/assets/icons/nodejsLight.svg",
      "/assets/icons/express-js.svg",
      "/assets/icons/mongo.svg",
    ],
    link: "https://github.com/localbusdriver/nwen304-project",
    linkType: "Github Repo",
  },
];

export const experience = {
  jobs: [
    {
      id: 1,
      role: "Help Desk Operator",
      company: "ECL Group Ltd",
      location: "Wellington, New Zealand",
      date: "October 2024 - Present",
      img: "/assets/icons/ecl_group.svg",
      descriptions: [
        "Provide frontline technical support for retail systems via phone and email, ensuring timely resolution within SLA standards.",
        "Troubleshoot and diagnose POS system issues remotely, coordinating with Level 2 support as needed.",
        "Document all customer interactions and solutions in ticketing system to identify recurring issues and improve service delivery.",
      ],
      className: "md:col-span-2",
    },
    {
      id: 2,
      role: "COMP132 Tutor",
      subTitle: "Programming for the Natural and Social Sciences",
      company: "Victoria University of Wellington",
      location: "Wellington, New Zealand",
      date: "July 2024 - October 2024",
      img: "/assets/icons/vuw.svg",
      descriptions: [
        "Cultivated programming proficiency in 20+ first-time coders by leading COMP132 sessions.",
        "Increased students' ability to process, transform, analyze, and present data effectively using industry-standard programming techniques.",
        "Assessed and provided feedback on student assignments and projects to improve academic performance and practical skills.",
      ],
      className: "md:col-span-2",
    },
    {
      id: 3,
      role: "INFO101 Tutor",
      subTitle: "Information Management Systems",
      company: "Victoria University of Wellington",
      location: "Wellington, New Zealand",
      date: "July 2024 - October 2024",
      img: "/assets/icons/vuw.svg",
      descriptions: [
        "Empowered 50+ students in INFO101 by delivering comprehensive tutoring on information systems, resulting in improvement in class performance and enhanced understanding of business operations, managerial decision-making, and organizational strategy.",
        "Structured innovative lesson plans by incorporating hands-on activities and real-world scenarios, resulting in  improvement in student comprehension of theoretical concepts and their practical applications in the field.",
      ],
      className: "md:col-span-2",
    },
    {
      id: 4,
      role: "Receptionist",
      company: "CityFitness",
      location: "Wellington, New Zealand",
      date: "June 2023 - December 2024",
      img: "/assets/icons/cityfitness.svg",
      descriptions: [
        "Process payments and maintain accurate records.",
        "Handle phone inquiries and provide professional customer service.",
        "Troubleshoot and resolve customer complaints and issues.",
      ],
      className: "md:col-span-2",
    },
  ],
};

export const education = [
  {
    id: 1,
    title: "Bachelor of Science in Computer Science",
    subTitle: "Victoria University of Wellington",
    date: "Feb 2021 - Jul 2024",
    img: "/assets/icons/vuw.svg",
    descriptions:
      "Relevant Coursework: Machine Learning Tools and Techniques, Fundamentals of Artificial Intelligence, Image-based Graphics, Advanced Network Applications",
    link: "",
    linkTitle: "",
  },
  {
    id: 2,
    title: "Nextwork",
    subTitle: "AWS Projects",
    date: "",
    img: "/assets/icons/freecodecamp.svg",
    descriptions:
      "Relevant Projects: Chatbot with Amazon Lex, VPC Traffic Flow and Security, Cloud Security with AWS IAM, S3 Bucket Storage",
    link: "https://github.com/localbusdriver/nextwork-aws-projects",
    linkTitle: "View Github Repo",
  },
  {
    id: 3,
    title: "Responsive Web Design",
    subTitle: "FreeCodeCamp.org",
    date: "March 2024 - April 2024",
    img: "/assets/icons/freecodecamp.svg",
    descriptions: "",
    link: "https://www.freecodecamp.org/certification/JamesLa/responsive-web-design",
    linkTitle: "View Certificate",
  },
  {
    id: 4,
    title: "JavaScript Algorithms and Data Structures",
    subTitle: "FreeCodeCamp.org",
    date: "April 2024 - June 2024",
    img: "/assets/icons/freecodecamp.svg",
    descriptions: "",
    link: "https://www.freecodecamp.org/certification/JamesLa/javascript-algorithms-and-data-structures-v8",
    linkTitle: "View Certificate",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/lajames/",
  },
  {
    id: 2,
    link: "https://github.com/localbusdriver/",
  },
];
