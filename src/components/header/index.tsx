import Contact from "./contact";

const Header = () => {
  return (
    <div id="hero" className="grid grid-cols-10 gap-8">
      <div id="about" className="col-span-6">
        <p className="text-muted font-thin capitalize">ABOUT</p>
        <p className="text-secondary text-wrap">
          Recent graduate of&nbsp;
          <span className="text-primary">
            <span className="font-bold">
              Te Herenga Waka - Victoria University of Wellington
            </span>
          </span>
          , majoring in <span className="font-bold text-blue-500">Computer Science</span>.
        </p>
      </div>
      <div className="col-span-2">
        <Contact />
      </div>
    </div>
  );
};

export default Header;
