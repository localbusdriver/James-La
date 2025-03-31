"use client";
import { scrollToSection } from "@/lib/utils";
import { cn } from "@/lib/utils";

import { Nanum_Myeongjo } from "next/font/google";

const nanumMyeongjo = Nanum_Myeongjo({
  weight: "400",
  subsets: ["latin"],
});

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-fill px-8 ">
      <div className="grid grid-cols-10 py-4 gap-8">
        <div className="col-span-6 flex flex-row gap-4 items-center justify-start ">
          <h5
            onClick={() => scrollToSection("hero")}
            className="text-2xl text-primary"
          >
            James La
          </h5>
          <h5 className="text-2xl text-primary">
            [
            <span
              className={cn(nanumMyeongjo.className, "text-xl text-primary")}
            >
              나 제임스
            </span>
            ]
          </h5>
        </div>
        <div className="col-span-2 flex items-center gap-6">
          <h6 className="text-sm text-primary">Software Engineer</h6>
        </div>
        <div className="col-span-2 flex items-center gap-6">
          <h6 className="text-sm text-primary">Wellington, New Zealand</h6>
        </div>
      </div>

      <div className="w-full h-[1px] bg-border rounded-full" />
    </div>
  );
};

export default Nav;
