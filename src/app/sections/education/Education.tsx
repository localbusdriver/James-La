"use client";

import { education } from "@/data";
import Link from "next/link";
import { useState } from "react";

const Education = () => {
  return (
    <section id="education" className="md:px-24 relative">
      <h1 className="heading ">Education / Certifications</h1>

      <div className="grid grid-cols-1 gap-10 mt-14">
        {education.map((edu) => (
          <div key={edu.id} className="flex flex-col gap-2">
            <h2 className="text-2xl flex flex-row justify-between font-thin">
              {edu.title}
            </h2>
            <div className="flex flex-row justify-between text-white/[0.5] italic font-thin">
              <p className="text-lg">{edu.subTitle}</p>
              <p className="text-sm">{edu.date}</p>
            </div>

            {edu.descriptions && (
              <p className="italic tracking-wider font-thin">
                {edu.descriptions.split(" ").map((str, i) => {
                  if (i < 2) {
                    return (
                      <span key={i} className="text-white/[0.7] font-bold">
                        {str}{" "}
                      </span>
                    );
                  } else {
                    return str + " ";
                  }
                })}
              </p>
            )}
            {edu.link && <Links education={edu} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

const Links = ({
  education,
}: {
  education: {
    linkTitle: string;
    link: string;
    id: number;
  };
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={education.link}
      target="_blank"
      id={`${education.id.toString()}-link`}
      className="text-blue-500 cursor-pointer hover:border-b-1 hover:border-primary w-max"
      onMouseEnter={() =>
        setTimeout(() => {
          setHover(true);
        }, 300)
      }
      onMouseLeave={() => setHover(false)}
    >
      View Certificate {hover ? "👀" : "🔗"}
    </Link>
  );
};
