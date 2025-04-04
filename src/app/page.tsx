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
      className="flex flex-1 items-center justify-center"
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
            <Link
              href="https://www.wgtn.ac.nz/"
              target="_blank"
              className="cursor-pointer text-primary hover:text-blue-900"
            >
              Te Herenga Waka - Victoria University of Wellington&nbsp;
              <ExternalLink className="mb-1 inline-block h-2 w-2 -translate-y-1 transform" />
            </Link>
            , with a Bachelor of Science, majoring in Computer Science.
          </p>

          <p className="text-sm text-muted">
            Currently providing support for fuel and retail systems throughout
            Oceania at{" "}
            <Link
              href="https://www.eclgroup.co.nz/"
              target="_blank"
              className="cursor-pointer text-primary hover:text-blue-900"
            >
              ECL Group.
              <ExternalLink className="mb-1 inline-block h-2 w-2 -translate-y-1 transform" />
            </Link>
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
          <div className="space-y-3">
            <div>
              <Link
                href="https://www.eclgroup.co.nz/"
                target="_blank"
                className="cursor-pointer text-sm text-muted hover:text-blue-900"
              >
                ECL Group&nbsp;
                <ExternalLink className="mb-1 inline-block h-2 w-2 -translate-y-1 transform" />
                &nbsp;
                <span className="text-sm text-muted">- Help Desk Operator</span>
              </Link>
              <p className="text-xs text-muted">2024 - Present</p>
            </div>
            <div>
              <Link
                href="https://www.wgtn.ac.nz/"
                target="_blank"
                className="cursor-pointer text-sm text-muted hover:text-blue-900"
              >
                Te Herenga Waka&nbsp;
                <span className="text-sm text-muted">- Tutor</span>
                <ExternalLink className="mb-1 inline-block h-2 w-2 -translate-y-1 transform" />
              </Link>
              <p className="text-xs text-muted">2024</p>
              <p className="text-xs text-muted">
                <span className="font-semibold">Courses:</span>&nbsp;COMP132,
                INFO101
              </p>
            </div>
          </div>
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
            <Link
              href="https://www.wgtn.ac.nz/"
              className="text-sm text-muted hover:text-blue-900"
            >
              Te Herenga Waka - Victoria University of Wellington
              <ExternalLink className="mb-1 inline-block h-2 w-2 -translate-y-1 transform" />
            </Link>
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
              TypeScript, JavaScript, Python, Java, C++, HTML, CSS
            </p>
            <p className="col-span-1">Frameworks:</p>
            <p className="col-span-2">
              React, Next.js, Node.js, Tailwind CSS, Node.js
            </p>
            <p className="col-span-1">Tools:</p>
            <p className="col-span-2">Unreal Engine 5, Godot 4, Blender</p>
          </div>
        </div>

        {/* Socials */}
        <Contact />

        <h6
          className={cn(
            "mt-4 text-sm font-bold text-muted opacity-80",
            nanumMyeongjo.className
          )}
        >
          New Portfolio in progress.
        </h6>
      </div>
    </motion.main>
  );
}
