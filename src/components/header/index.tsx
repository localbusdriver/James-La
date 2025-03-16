const Header = () => {
  return (
    <div id="hero" className="flex items-center gap-1 w-full py-8">
      <div id="about">
        <p className="text-muted font-thin capitalize">ABOUT</p>
        <p className="text-secondary">
          Recent graduate of{" "}
          <span className="text-primary">
            <span className="font-bold">
              Te Herenga Waka - Victoria University of Wellington
            </span>
          </span>
          , majoring in <span className="font-bold text-accent">Computer Science</span>.
        </p>
      </div>
    </div>
  );
};

export default Header;
