"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "@/data";

export const FloatingNav = ({
  className,
  topRef,
}: {
  className?: string;
  topRef: React.RefObject<HTMLElement>;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState<boolean>(true);

  const [nameState, setNameState] = useState<string>("James La");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleNameClick = () => {
    setNameState("나 기턔");
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] gap-1 lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-4 py-2 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-2",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(255, 255, 255, 0.125)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className="min-w-[88px] p-0 flex justify-center items-center rounded group md:border md:border-white/[0.5] hover:bg-white/[0.05] !cursor-pointer">
          <p
            className={cn(
              "relative text-sm p-2 dark:text-neutral-50 text-neutral-600 dark:group-hover:text-primary group-hover:text-primary"
            )}
            onMouseEnter={() => setNameState("나 기턔")}
            onMouseLeave={() => setNameState("James La")}
            onClick={() => handleNameClick()}
          >
            {nameState}
          </p>
        </div>
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex text-neutral-600 dark:hover:text-primary hover:text-primary"
            )}
            target={navItem.target}
          >
            <span className="text-sm !cursor-pointer rounded-lg hover:bg-white/[0.05] p-2">
              {navItem.icon ? navItem.icon : navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
