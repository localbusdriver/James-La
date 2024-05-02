import React from "react";
import vuw from "../../assets/education/vuw.svg";
import wbc from "../../assets/education/wbc.png";

function Education() {
  return (
    <section id="education" className="p-0">
      <div className="flex">
        <div className="w-1/2 bg-white py-32 pl-32">
          <h1 className="text-black text-center ">Education</h1>
          <div className="mx-auto my-7 w-32 h-0.5 bg-black" />
        </div>

        <div className="flex flex-col gap-10 w-1/2 bg-black pl-20 pr-10 py-32">
          <div className="flex flex-row space-x-8">
            <div className="">
              <h3>Victoria University of Wellington</h3>
              <p>Bachelor of Science, Major in Computer Science</p>
              <p className="italic">2021 - 2024</p>
            </div>
            <img src={vuw} alt="vuw" className="" />
          </div>

          <div className="flex flex-row space-x-8">
            <div>
              <h3>Wellington Boys College</h3>
              <p>NCEA Level 1, Level 2, Level 3</p>
              <p className="italic">2016 - 2020</p>
            </div>
            <img src={wbc} alt="wbc" className="" width={200} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Education;
