"use client";
import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

const greetings = [
  "Hello",
  "Kia ora",
  "안녕하세요",
  "Hola",
  "Bonjour",
  "你好",
  "こんにちは",
];

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const greetingIndexRef = useRef(0);
  const greetingRef = useRef<HTMLSpanElement>(null);
  const [currentGreeting, setCurrentGreeting] = useState<string>(
    greetings[greetingIndexRef.current]
  );

  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  useEffect(() => {
    const interval = setInterval(() => {
      greetingIndexRef.current =
        (greetingIndexRef.current + 1) % greetings.length;
      setCurrentGreeting(greetings[greetingIndexRef.current]);
    }, 3000);
    greetingRef.current?.classList.add("title");
    return () => clearInterval(interval);
  }, [currentGreeting]);

  const renderWords = (): React.ReactElement<any, any> => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={` ${
                idx > 0 ? "text-primary" : "dark:text-white text-black"
              } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-medium", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black tracking-wide flex items-center flex-wrap justify-center">
          <span ref={greetingRef} className="fadingEffect">
            {currentGreeting}!
          </span>
          &nbsp;
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
