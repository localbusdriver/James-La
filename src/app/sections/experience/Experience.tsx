import { cn } from "@/lib/utils";
import { experience } from "@/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "./components/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <section id="experience" className="py-20 w-full">
      <h1 className="heading">
        My work <span className="text-primary">experience</span>
      </h1>

      <Accordion type="single" collapsible className="w-full mt-8 md:px-24">
        {experience.jobs.map((card) => (
          <ExperienceAccordion key={`accordion-${card.id}`} card={card} />
        ))}
      </Accordion>

      {/* <div className="w-full mt-12 flex flex-col gap-10"> */}
      {/* <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {experience.jobs.map((card) => (
          <Card card={card} key={`card-${card.id}`} />
        ))}
      </div> */}
    </section>
  );
};

function ExperienceAccordion({
  card,
}: {
  card: {
    id: number;
    role: string;
    subTitle?: string | undefined;
    company: string;
    location: string;
    date: string;
    img: string;
    descriptions?: never[] | string[];
    className: string;
  };
}) {
  return (
    <AccordionItem value={`item-${card.id}`}>
      <AccordionTrigger className="hover:no-underline hover:text-primary text-lg md:text-2xl text-start font-thin">
        <span className="w-full flex flex-row justify-between items-center pr-4">
          <span className="flex flex-row gap-4 items-center justify-items-center">
            <Image
              src={card.img}
              height={70}
              width={100}
              alt={card.img}
              className={cn(
                "mx-auto md:mx-0 ",
                card.img === "/assets/icons/cityfitness.svg"
                  ? "opacity-65"
                  : "opacity-100"
              )}
            />
            {card.role}
          </span>

          <em className="text-xs md:text-sm">{card.date}</em>
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-wrap justify-between gap-4 items-center">
          <div className="flex flex-col gap-1 justify-end">
            {card.subTitle && (
              <h2 className="text-start text-lg text-white/[0.5] font-thin">
                {card.subTitle}
              </h2>
            )}
            <h2 className="text-start text-md italic font-thin">
              {card.company}
            </h2>
            <h3 className="text-start text-md font-thin">{card.location}</h3>
          </div>
        </div>

        {/* <p className="text-start text-white-100 mt-3 font-semibold">
            {card.descriptions && card.descriptions[0]}
          </p> */}
        <ul className="mt-3 gap-2 list-disc px-4 lg:w-2/3 tracking-wider">
          {card.descriptions &&
            card.descriptions.map((desc, i) => (
              <li
                key={`desc-${i}`}
                className="text-start text-white font-thin tracking-wider"
              >
                {desc}
              </li>
            ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

function Card({
  card,
}: {
  card: {
    id: number;
    role: string;
    subTitle?: string | undefined;
    company: string;
    location: string;
    date: string;
    img: string;
    descriptions?: never[] | string[];
    className: string;
  };
}) {
  return (
    <Button
      duration={Math.floor(Math.random() * 10000) + 10000}
      borderRadius="1.75rem"
      className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
    >
      <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
        <Image
          src={card.img}
          alt={card.img}
          width={275}
          height={108}
          className="lg:w-32 md:w-20 w-16"
        />
        <div className="lg:ms-5">
          <h1 className="text-start text-xl md:text-2xl font-thin">
            {card.role}{" "}
            <span className="ml-10 text-sm italic font-thin">{card.date}</span>
          </h1>
          <h2 className="text-start text-md font-thin">{card.subTitle}</h2>
          <h2 className="text-start text-md italic font-thin">
            {card.company}
          </h2>

          <h3 className="text-start text-md font-thin">{card.location}</h3>
          <p className="text-start text-white-100 mt-3 font-semibold">
            {card.descriptions && card.descriptions[0]}
          </p>
        </div>
      </div>
    </Button>
  );
}

export default Experience;
