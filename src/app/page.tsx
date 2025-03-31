"use client";

import { Nanum_Myeongjo } from "next/font/google";
import Link from "next/link";

import Contact from "@/components/contact";

import { cn } from "@/lib/utils";

const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center py-28">
      <div
        id="main-container"
        className="flex max-w-3xl flex-col items-start gap-8"
      >
        <div
          id="heading-container"
          className="flex flex-row items-center gap-3"
        >
          <h5 className="text-2xl text-muted">James La</h5>
          <h5 className={cn(nanumMyeongjo.className, "text-xl text-muted")}>
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
              href="https://www.victoria.ac.nz/"
              target="_blank"
              className="cursor-pointer text-green-700"
            >
              Te Herenga Waka - Victoria University of Wellington
            </Link>
            , with a Bachelor of Science, majoring in Computer Science.
          </p>

          <p className="text-sm text-muted">
            Currently providing support for fuel and retail systems throughout
            Oceania at{" "}
            <Link
              href="https://www.eclgroup.co.nz/"
              target="_blank"
              className="cursor-pointer text-primary"
            >
              ECL Group.
            </Link>
          </p>
        </div>

        {/* Seperator */}
        <div className="h-[1px] w-full bg-gray-300" />

        {/* Education */}
        <div id="education" className="space-y-3">
          <h6
            className={cn(
              "space-y-2 text-sm font-bold text-muted opacity-80",
              nanumMyeongjo.className
            )}
          >
            Education
          </h6>
          <div>
            <h5 className="text-muted">
              Te Herenga Waka - Victoria University of Wellington
            </h5>
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

        {/* Work Experience */}
        <div id="experience" className="space-y-3">
          <h6
            className={cn(
              "text-sm font-bold text-muted opacity-80",
              nanumMyeongjo.className
            )}
          >
            Work Experience
          </h6>
          <div>
            <h5 className="text-muted">
              ECL Group&nbsp;
              <span className="text-sm text-muted">- Help Desk Operator</span>
            </h5>
            <p className="text-xs text-muted">2024 - Present</p>
          </div>
          <div>
            <h5 className="text-muted">
              Te Herenga Waka&nbsp;
              <span className="text-sm text-muted">- Tutor</span>
            </h5>
            <p className="text-xs text-muted">2024</p>
            <p className="text-xs text-muted">
              <span className="font-semibold">Courses:</span>&nbsp;COMP132,
              INFO101
            </p>
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
    </main>
  );
}
