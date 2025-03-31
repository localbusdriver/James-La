"use client";

import { Nanum_Myeongjo, Source_Code_Pro } from "next/font/google";
import Link from "next/link";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ArrowUpRight, FileIcon, MailIcon, PhoneIcon } from "lucide-react";
import { toast } from "sonner";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

const sourceCodePro = Source_Code_Pro({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const nanumMyeongjo = Nanum_Myeongjo({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const copyText = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success(`Copied ${text} to clipboard`);
};

const contact = [
  {
    name: "+64 21 174 9208",
    onClick: () => copyText("+64 21 174 9208"),
    icon: <PhoneIcon className="h-4 w-4" />,
    tooltip: "Click to copy",
  },
  {
    name: "hello@james-la.me",
    onClick: () => copyText("hello@james-la.me"),
    icon: <MailIcon className="h-4 w-4" />,
    tooltip: "Click to copy",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/lajames/",
    icon: <LinkedInLogoIcon className="h-4 w-4" />,
    tooltip: "linkedin/lajames",
  },
  {
    name: "Github",
    link: "https://github.com/localbusdriver",
    icon: <GitHubLogoIcon className="h-4 w-4" />,
    tooltip: "github/localbusdriver",
  },
  {
    name: "Curriculum Vitae",
    link: "/James-La-Resume.pdf",
    icon: <FileIcon className="h-4 w-4" />,
    tooltip: "Open PDF",
  },
];

const index = () => {
  return (
    <TooltipProvider>
      <ul className="w-full">
        <li className="mb-2">
          <h5
            className={cn(
              "text-sm font-bold text-muted opacity-80",
              nanumMyeongjo.className
            )}
          >
            Contact, Socials
          </h5>
        </li>
        {contact.map((contact, index) => {
          if (contact?.link) {
            return (
              <li key={contact.name + index} className="group">
                <Link href={contact.link} className="" target="_blank">
                  <ContentContainer index={index} contact={contact} />
                </Link>
              </li>
            );
          } else {
            return (
              <li
                key={contact.name + index}
                className="group"
                onClick={contact.onClick}
              >
                <ContentContainer index={index} contact={contact} />
              </li>
            );
          }
        })}
      </ul>
    </TooltipProvider>
  );
};

const ContentContainer = ({
  index,
  contact,
}: {
  index: number;
  contact: any;
}) => {
  return (
    <div className="flex w-full cursor-pointer flex-row items-center justify-between text-sm text-muted group-hover:text-blue-600">
      <span className="flex flex-row items-center text-sm">
        <sup
          className={cn(
            sourceCodePro.className,
            "transition-opacity duration-200 group-hover:opacity-0"
          )}
        >
          {index + 1}
        </sup>
        <span className="-translate-x-[0.4em] -translate-y-[0.4em] scale-75 transform opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {contact.icon}
        </span>

        <TooltipContainer contact={contact}>
          <span>{contact.name}</span>
        </TooltipContainer>
      </span>
      <ArrowUpRight className="h-4 w-4" />
    </div>
  );
};

const TooltipContainer = ({
  children,
  contact,
}: {
  children: React.ReactNode;
  contact: any;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className="border-gray-300 bg-primary-foreground text-primary">
        {contact.tooltip || contact.name}
      </TooltipContent>
    </Tooltip>
  );
};

export default index;
