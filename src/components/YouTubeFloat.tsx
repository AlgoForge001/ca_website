import { Youtube } from "lucide-react";

export function YouTubeFloat() {
  return (
    <a
      href="https://www.youtube.com/@prakashgajra1637"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Subscribe on YouTube"
      className="fixed bottom-6 right-[152px] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-lg hover:scale-110 transition-transform"
    >
      <Youtube className="h-7 w-7" />
    </a>
  );
}
