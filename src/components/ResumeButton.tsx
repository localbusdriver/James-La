import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";

const ResumeButton = ({ className }: { className: string }) => {
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "h-10 px-4 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 font-light hover:text-primary transition",
          className
        )}
      >
        Resume
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2 max-w-max p-4 bg-muted">
        <h3 className="text-xl font-thin">Resumes</h3>
        <p className="text-muted-foreground">
          Two-Page for longer more in-depth resume, otherwise one-page for
          quicker read.
        </p>
        <div className="flex flex-row overflow-auto justify-center items-center gap-4">
          <Link
            href="/James-Resume.pdf"
            target="_blank"
            className="px-3 py-2 max-w-max transition border border-accent rounded hover:bg-primary hover:border-primary active:bg-primary active:border-primary"
          >
            1-Page
          </Link>
          <Link
            href="/James-La-Resume.pdf"
            target="_blank"
            className="px-3 py-2 max-w-max transition border border-accent rounded hover:bg-primary hover:border-primary active:bg-primary active:border-primary"
          >
            2-Page
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ResumeButton;
