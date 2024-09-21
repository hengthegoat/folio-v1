export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Horizxon Limited",
    description:
      "Horizxon Limited, a dynamic startup poised to revolutionize the tech industry with its visionary approach and groundbreaking solutions.",
    technologies: ["TS.js", "Next.js", "Prismic CMS"],
    github: "https://github.com/Horizxon-limited",
    demo: "https://horizxon.tech/",
    image: require(".//../../public/projects/HORIZXON.png"),
    available: true,
  },
  {
    id: 1,
    name: "Sennifer",
    description:
      "Ultimate Music Experiences , 44 Filters to adjust your Audio! Spotify , Soundcloud, etc Youtube , and 1100+ Other Links Supported!",
    technologies: ["TS.js", "Next.js", "Prismic CMS"],
    github: "https://github.com/HenGPlayZ",
    demo: "https://sennifer.rocks/",
    image: require(".//../../public/projects/sennifer.png"),
    available: true,
  },
  {
    id: 2,
    name: "QR-Code Generator",
    description:
      "Simple and free to use, your QR code generator allows you to create high-quality codes in just a few steps.",
    technologies: ["Next.js", "Typescript", "Prisma"],
    github: "https://github.com/HenGPlayZ/qr-generator",
    demo: "https://qr.hengnation.dev/",
    image: require(".//../../public/projects/image_2024-06-23_23-16-34 (sdfg.png"),
    available: true,
  },

   {
     id: 3,
     name: "Horizxon lavalink Rest API",
     description:
       "Lavalink Monitoring & Status: Real-Time Analytics and Performance Insights",
     technologies: ["HTML", "CSS", "JavaScript"],
     github: "https://github.com/HenGPlayZ/lavalink-status",
     demo: "https://api.lavalink.rocks/",
     image: require(".//../../public/projects/lavaapi.png"),
     available: true,
   },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
