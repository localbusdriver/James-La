import { TextGenerateEffect } from "./components/TextGenerateEffect";
import Image from "next/image";
import { heroData } from "@/data";

const Hero = ({ topRef }: { topRef: React.RefObject<HTMLElement> }) => {
  return (
    <section ref={topRef} id="hero" className="pb-4 pt-36">
      <div className="h-screen w-full absolute top-[-300px] left-0 flex items-center justify-center ">
        <Image
          src="/assets/background.svg"
          alt="sun"
          width={2000}
          height={2000}
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className=" md:max-w-2xl max-h-[10px] lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="I'm James La"
            // words="Transforming Concepts into Seamless User Experiences"
            className="text-5xl md:text-6xl lg:text-7xl font-light"
          />

          <p className="md:tracking-wider mb-4 text-sm md:text-xl lg:text-2xl font-thin">
            I&apos;m a Software Developer based in Wellington, New Zealand.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:grid grid-cols-2 grid-rows-2 max-w-max gap-4 md:px-20  justify-center z-10">
        <div className="col-span-1 row-span-2 text-left min-w-[298px]">
          <h3 className="font-thin text-white/[0.5] mb-2">
            {heroData.about.title}
          </h3>
          <p className="text-secondary-foreground font-thin text-sm tracking-wider">
            {heroData.about.content}
          </p>

          <h3 className="font-thin text-white/[0.5] mt-8 mb-2">
            {heroData.technical.title}
          </h3>
          <p className="text-secondary-foreground font-thin text-sm tracking-wider">
            {heroData.technical.content}
          </p>
        </div>

        <div className="col-span-1 row-span-2 text-left max-w-max text-wrap">
          {heroData.skills.skills.map((skill, ind) => (
            <div key={`skill+${ind}`} className="mb-4 max-w-max">
              <h3 className="font-thin text-white/[0.5] mb-2 max-w-max">
                {skill.type}
              </h3>
              <p className="text-secondary-foreground font-thin text-sm tracking-wider ">
                {skill.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

// const temp = () => {
//   return (
//     <div className="grid grid-cols-2 grid-rows-2  lg:px-0 px-20 gap-4">
//       {/* <div className="flex lg:flex-row lg:px-0 sm:px-20 mx-auto flex-col gap-4 overflow-hidden"> */}
//       {heroData.map((item, idx) => (
//         <div
//           key={`hero-${idx}`}
//           className={cn("col-span-1 row-span-2 text-left min-w-[298px]")}
//         >
//           {item.skills ? (
//             item.skills.map((skill, ind) => (
//               <div key={`${idx}+${ind}`} className="mb-4">
//                 <h3 className="font-thin text-white/[0.5] mb-2">
//                   {skill.type}
//                 </h3>
//                 <p className="text-secondary-foreground font-thin text-sm tracking-wider">
//                   {skill.items.join(", ")}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <div className="row-span-1 col-span-1">
//               <h3 className="font-thin text-white/[0.5] mb-2">{item.title}</h3>
//               <p className="text-secondary-foreground font-thin text-sm tracking-wider">
//                 {item.content}
//               </p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };
