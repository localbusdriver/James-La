"use client";
import { scrollToSection } from "@/lib/utils";

const Nav = () => {

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-fill px-8">
      <div className="flex justify-between items-center py-3">
        <h5
          onClick={() => scrollToSection("hero")}
          className="text-2xl text-primary"
        >
          James La
        </h5>
        <div className="flex items-center gap-6">
          <h6 className="text-sm text-primary">Software Engineer</h6>
          <h6 className="text-sm text-primary">Wellington, New Zealand</h6>
        </div>
      </div>

      <div className="w-full h-[1px] bg-border rounded-full" />
    </div>
  );
};

export default Nav;
