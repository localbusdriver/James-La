"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./components/Pin";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
  const handleProjectClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <section id="projects" className="py-20 md:px-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-primary">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-8">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
            onClick={() => handleProjectClick(item.link)}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{
                    backgroundColor: "rgba(5,18,47,1)",
                    background:
                      "linear-gradient(30deg, rgba(5,18,47,1) 18%, rgba(20,47,106,1) 58%)",
                  }}
                >
                  {/* <h1
                    className="absolute top-20 max-w-fit md:min-w-[70vw] gap-1 lg:min-w-fit z-[5000] inset-x-0 mx-auto px-4 py-2 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-2"
                    style={{
                      backdropFilter: "blur(16px) saturate(180%)",
                      backgroundColor: "rgba(255, 255, 255, 0.125)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.125)",
                    }}
                  >
                    {item.title}
                  </h1> */}
                  {/* <h1 className="absolute z-[10] text-secondary-foreground text-center w-full md:top-20 p-4 bg-white-700 opacity-65">{item.title}</h1> */}

                  {/* <Image
                    src="/assets/bg.png"
                    alt="bgimg"
                    width={552}
                    height={330}
                    className="z-[2]"
                  /> */}
                </div>
                <Image
                  src={item.img}
                  alt={item.img}
                  // width={220}
                  // height={330}
                  layout="fill"
                  objectFit="cover"
                  className="z-[2] absolute bottom-0 rounded-lg opacity-80"
                />
              </div>

              <h1 className="font-light lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl font-thin text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="icon5"
                        className="p-2 rounded-full"
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>

                <Link
                  href={item.link}
                  className="flex justify-center items-center text-white/[0.5] hover:text-primary transition ease-in-out delay-100 hover:bg-primary-foreground py-2 px-3 border-b-2 hover:border-primary rounded-t-xl "
                  target="_blank"
                >
                  <p className="flex lg:text-lg font-light md:text-xs text-sm ">
                    Check {item.linkType}
                  </p>
                  <FaLocationArrow className="ms-3" />
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
