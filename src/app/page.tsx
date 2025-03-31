import { cn } from "@/lib/utils";
import { Nanum_Myeongjo } from "next/font/google";

const nanumMyeongjo = Nanum_Myeongjo({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <h5 className="text-muted text-2xl">James La</h5>
          <h5 className={cn(
            nanumMyeongjo.className,
            "text-muted text-xl"
          )}>[나 제임스]</h5>
        </div>
      </div>
    </main>
  );
}
