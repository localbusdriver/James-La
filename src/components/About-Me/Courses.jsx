import React from "react";
function Courses() {
  return (
    <>
      <div className="w-1/6 vertical-text pt-10 flex">
        <div className="relative -right-10 w-0.5 flex-grow bg-lb mb-10" />
        <h1 className="animation-none lb text-8xl my-auto text-right">
          Notable Courses
        </h1>
        <div className="relative -right-10 w-0.5 flex-grow bg-lb mt-10" />
      </div>
      <div className="flex flex-col gap-20 px-20">
        <div>
          <h1 className="animation-none lb mb-0">NWEN 304</h1>
          <p className="animation-none lb mb-3 italic">
            Advanced Network Applications
          </p>
          <div className="pl-12">
            <p className="animation-none italic">
              Victoria University of Wellington
            </p>
            <p className="animation-none w-1/2 mt-2">
              Developed a secure, scalable and reliable{" "}
              <strong className="lb"> RESTful Web Application </strong>
              by using frameworks, MVC, distributed authentication and
              authorization to{" "}
              <strong className="lb"> build, deploy and test </strong> web
              applications on a cloud computing infrastructure.
            </p>
          </div>
        </div>

        <div className="pl-72">
          <h1 className="animation-none lb">COMP 307</h1>
          <p className="animation-none lb mb-3 italic">
            Introduction to Artificial Neural Networks
          </p>
          <div className="pl-12">
            <p className="animation-none italic">
              Victoria University of Wellington
            </p>
            <p className="animation-none w-1/2 mt-2">
              Developed Machine Learning models from
              <strong> KNN </strong> to
              <strong> Deep Neural Networks </strong>
              using Python without libraries like Scikit-Learn.
            </p>
          </div>
        </div>
        <div>
          <h1 className="animation-none lb">COMP 309</h1>
          <p className="animation-none lb mb-3 italic">
            Machine Learning Tools/Techniques
          </p>
          <div className="pl-12">
            <p className="animation-none italic">
              Victoria University of Wellington
            </p>
            <p className="animation-none w-1/2 mt-2">
              Preprocessed data to <strong> train </strong> and
              <strong> test </strong> Machine Learning models such as the
              K-Nearest Neighbour classifier to
              <strong> Convolutional Neural Networks </strong> for
              <strong> Image Classification </strong> using Python and
              Scikit-Learn
            </p>
          </div>
        </div>
        <div className="pl-72">
          <h1 className="animation-none lb">CGRA 352</h1>
          <p className="animation-none lb mb-3 italic">Image-based Graphics</p>
          <div className="pl-12">
            <p className="animation-none italic">
              Victoria University of Wellington
            </p>
            <p className="animation-none w-1/2 mt-2">
              Manipulating images through techniques from,{" "}
              <strong>filtering based image processing</strong>, to{" "}
              <strong>feature matching</strong> and{" "}
              <strong>image warping</strong>.
            </p>
          </div>
        </div>

        <div>
          <h1 className="animation-none lb">Responsive Web Design</h1>
          <p className="animation-none text-xs italic">
            <a
              href="https://www.freecodecamp.org/certification/fccbc66bdaf-49f3-4823-b796-e08aabf0b4de/responsive-web-design"
              className="lb text-lg mb-3 italic tracking-wide cursor-pointer hover:underline"
            >
              freeCodeCamp.org
            </a>{" "}
            (View Certificate)
          </p>
          <div className="pl-12">
            <p className="animation-none italic">Certificate</p>
            <p className="animation-none w-1/2 mt-2">
              This program equipped me with the skills to create visually
              appealing and technically sound websites that are optimized for
              functionality across and seamless user experience across various
              devices.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
