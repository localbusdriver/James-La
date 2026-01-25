"use client";

import { Nanum_Myeongjo } from "next/font/google";
import Link from "next/link";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import Contact from "@/components/contact";

import { cn } from "@/lib/utils";

const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <motion.main
      className="flex flex-1 items-center justify-center py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        id="main-container"
        className="flex max-w-3xl flex-col items-start gap-8"
      >
        <div id="heading-container" className="flex flex-row items-end gap-3">
          <h5 className="text-2xl text-[#030303]">James La</h5>
          <h5 className={cn(nanumMyeongjo.className, "text-xl text-[#030303]")}>
            [나 제임스]
          </h5>
        </div>

        <div id="about-container" className="space-y-3">
          <p className="text-sm text-muted">
            I&apos;m a software engineer with a passion for building products
            that are functional with additional attention to user-experience,
            and a hint of aesthetics.
          </p>

          <p className="text-sm text-muted">
            Graduate of{" "}
            <ExternalPageLink
              title="Te Herenga Waka - Victoria University of Wellington"
              link="https://www.wgtn.ac.nz/"
              className="cursor-pointer text-primary hover:text-blue-900"
            />
            , with a Bachelor of Science, majoring in Computer Science.
          </p>

          <p className="text-sm text-muted">
            Currently implementing Airport Operational Systems (AOS) for major
            airports airports globally.{" "}
            <ExternalPageLink
              title="Veovo"
              link="https://www.veovo.com/"
              className="cursor-pointer text-primary hover:text-blue-900"
            />
          </p>
        </div>

        {/* Seperator */}
        <div className="h-[1px] w-full bg-gray-300" />

        {/* Work Experience */}
        <div id="experience" className="space-y-1">
          <h6
            className={cn(
              "text-sm font-bold text-[#030303]",
              nanumMyeongjo.className
            )}
          >
            Work Experience
          </h6>
          <ul className="space-y-3">
            <li>
              <ExternalPageLink title="Veovo" link="https://www.veovo.com/" />
              &nbsp;
              <span className="text-sm text-muted">- Technical Consultant</span>
              <p className="text-xs text-muted">June 2025 - Present</p>
            </li>
            <li>
              <ExternalPageLink
                title="ECL Group"
                link="https://www.eclgroup.co.nz/"
              />
              &nbsp;
              <span className="text-sm text-muted">- Help Desk Operator</span>
              <p className="text-xs text-muted">November 2024 - May 2025</p>
            </li>
            <li>
              <ExternalPageLink
                link="https://www.wgtn.ac.nz/"
                title="Te Herenga Waka"
              />
              &nbsp;
              <span className="text-sm text-muted">- Tutor</span>
              <p className="text-xs text-muted">2024</p>
              <p className="text-xs text-muted">
                <span className="font-semibold">Courses:</span>&nbsp;
                <ExternalPageLink
                  title="COMP132"
                  link="https://www.wgtn.ac.nz/courses/comp/132/2024/offering?crn=30095"
                  className="text-xs"
                />
                ,&nbsp;
                <ExternalPageLink
                  title="INFO101"
                  link="https://www.wgtn.ac.nz/courses/info/101/2024/offering?crn=10038"
                  className="text-xs"
                />
              </p>
            </li>
          </ul>
        </div>

        {/* Education */}
        <div id="education" className="space-y-1">
          <h6
            className={cn(
              "mb-1 text-sm font-bold text-[#030303]",
              nanumMyeongjo.className
            )}
          >
            Education
          </h6>
          <div>
            <ExternalPageLink
              title="Te Herenga Waka - Victoria University of Wellington"
              link="https://www.wgtn.ac.nz/"
            />
            <p className="text-xs text-muted">2021 - 2024</p>
            <p className="text-sm text-muted">
              Bachelor of Science | Major in Computer Science.
            </p>
            <p className="text-xs text-muted">
              <span className="font-bold">Notable Courses:</span>&nbsp;Machine
              Learning Tools and Techniques, Fundamentals of Artificial
              Intelligence, Image-based Graphics, Advanced Network Applications
            </p>
          </div>
        </div>

        <div id="skills" className="space-y-1">
          <h6
            className={cn(
              "mb-1 text-sm font-bold text-[#030303]",
              nanumMyeongjo.className
            )}
          >
            Skills
          </h6>
          <div className="grid grid-cols-3 gap-x-4 text-sm text-muted">
            <p className="col-span-1">Programming Languages:</p>
            <p className="col-span-2">
              C#, T-SQL, TypeScript, JavaScript, Python, Java, C++, HTML, CSS
            </p>
            <p className="col-span-1">Frameworks/Tools:</p>
            <p className="col-span-2">
              Windows Server, MS SQL, .NET, React, Next.js, Node.js, Tailwind
              CSS
            </p>
          </div>
        </div>

        {/* Socials */}
        <Contact />

        {/* <h6
          className={cn(
            "mt-4 text-sm font-bold text-muted opacity-80",
            nanumMyeongjo.className
          )}
        >
          New Portfolio in progress.
        </h6> */}
      </div>
    </motion.main>
  );
}

const ExternalPageLink = ({
  title,
  link,
  className,
}: {
  title: string;
  link: string;
  className?: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        "cursor-pointer text-sm text-muted hover:text-blue-900",
        className
      )}
    >
      {title}
      <ExternalLink className="mb-1 inline-block h-2 w-2 -translate-y-1 transform" />
    </Link>
  );
};
