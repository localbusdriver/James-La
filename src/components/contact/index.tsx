import Link from "next/link";
import { ArrowUpRight, MailIcon, FileIcon } from "lucide-react";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import { Source_Code_Pro } from "next/font/google";
import { cn } from "@/lib/utils";

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const contact = [
  {
    name: "Email",
    link: "mailto:hello@james-la.me",
    icon: <MailIcon className="w-4 h-4" />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/lajames/",
    icon: <LinkedInLogoIcon className="w-4 h-4" />,
  },
  {
    name: "Github",
    link: "https://github.com/localbusdriver",
    icon: <GitHubLogoIcon className="w-4 h-4" />,
  },
  {
    name: "Curriculum Vitae",
    link: "/James-La-Resume.pdf",
    icon: <FileIcon className="w-4 h-4" />,
  },
];

const index = () => {
  return (
    <ul className="w-full">
      <li className="text-muted">
        SOCIALS, CONTACTS
      </li>
      {contact.map((contact, index) => (
        <li key={contact.name + index} className="group">
          <Link
            href={contact.link}
            className="text-secondary group-hover:text-primary flex flex-row justify-between items-center"
            target="_blank"
          >
            <span className=" flex flex-row items-center">

              <sup className={cn(
                sourceCodePro.className,
                "transition-opacity duration-200 group-hover:opacity-0"
              )}>
                {index + 1}
              </sup>
              <span className=" opacity-0 transition-opacity duration-200 group-hover:opacity-100 transform  -translate-y-[0.4em] -translate-x-[0.4em] scale-75">
                {contact.icon}
              </span>
              {contact.name}
            </span>

            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default index;