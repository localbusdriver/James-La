"use client";

import Link from "next/link";
import React from "react";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const FileUser: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-file-user-icon lucide-file-user"
    >
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M15 18a3 3 0 1 0-6 0" />
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      <circle cx="12" cy="13" r="2" />
    </svg>
  );
};

const ArrowUp: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-up-icon lucide-arrow-up"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
};

const footerContent = [
  {
    name: "Github",
    link: "https://github.com/jamesla123",
    icon: <GitHubLogoIcon className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jamesla123/",
    icon: <LinkedInLogoIcon className="h-5 w-5" />,
  },
  {
    name: "Resume",
    link: "/James-La-Resume.pdf",
    icon: <FileUser className="h-5 w-5" />,
  },
];

const index = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bottom-0 left-0 mx-auto w-[768px]">
      {/* Seperator */}
      <div className="h-[1px] w-full bg-gray-300" />

      {/* Footer Content */}
      <div className="flex flex-row items-center justify-between gap-2 py-4">
        {/* Footer Heading */}
        <div
          className="border-none bg-transparent px-0 py-0 text-lg font-normal text-muted hover:bg-transparent hover:text-primary"
          onClick={scrollToTop}
        >
          James La
        </div>

        {/* Footer Links */}
        <ul className="flex flex-row items-center justify-end gap-3">
          {footerContent.map((item) => (
            <li key={item.name} className="group">
              <Link
                href={item.link}
                target="_blank"
                className="text-muted group-hover:text-primary"
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default index;
