import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tang Heng - Software Developer",
  description:
    "Software Developer and Freelancer, currently a student at NUS. Focused on interfaces and experiences, working remotely from Cambodia.",
  generator: "Next.js",
  applicationName: "Tang Heng",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Tang Heng - Software Developer",
    description:
      "Software Developer and Freelancer, currently a student at NUS. Focused on interfaces and experiences, working remotely from Cambodia.",
    url: "https://hengnation.eu/",
    siteName: "hengnation.eu",
    images: [
      {
        url: "https://cdn.hengnation.eu/Dq.png",
        width: 1200,
        height: 630,
        alt: "Tang Heng - Software Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tang Heng - Software Developer",
    description:
      "Software Developer and Freelancer, currently a student at NUS. Focused on interfaces and experiences, working remotely from Cambodia.",
    creator: "stuvythegoat",
    creatorId: "1412410690141310982",
    images: [
      "https://cdn.hengnation.eu/Dq.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
