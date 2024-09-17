"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "@/components/ui/MagicButton";
import Link from "next/link";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import ContactForm from "./components/form";
import ResumeButton from "@/components/ResumeButton";

const Footer = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "jamesla200210@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <footer
      className="w-full pt-20 pb-10 md:px-20 relative overflow-hidden"
      id="contact"
    >
      {/* background grid */}
      <div className="w-full absolute inset-0 z-[-100] -top-50">
        <img
          src="/assets/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-100 object-cover object-top"
        />
      </div>

      <div className="flex flex-col items-center gap-5">
        <h1 className="heading lg:max-w-[45vw]">Get in touch with me</h1>
        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <Lottie options={defaultOptions} height={200} width={400} />
          </div>

          <MagicButton
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={<IoCopyOutline />}
            position="left"
            handleClick={handleCopy}
          />
        </div>
        <h2>or</h2>
        {/* <TerminalContact /> */}
        <ContactForm />
      </div>
      <div className="flex mt-20 md:flex-row flex-col gap-8 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 James La
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <ResumeButton className="h-10 p-4 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 group" />
          {socialMedia.map((info) => (
            <Link
              key={`social-media ${info.id}`}
              href={info.link}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 group"
              target="_blank"
            >
              {info.id === 1 && (
                <FaLinkedin
                  size={20}
                  className="group-hover:fill-primary transition"
                />
              )}
              {info.id === 2 && (
                <FaGithub
                  size={20}
                  className="group-hover:fill-primary transition"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
