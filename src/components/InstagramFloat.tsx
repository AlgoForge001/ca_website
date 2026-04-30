import { Instagram } from "lucide-react";

export function InstagramFloat() {
  return (
    <a
      href="https://www.instagram.com/prakash.parapowerlifter?utm_source=qr&igsh=ZjRoOW41ZzNoM2F3"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow on Instagram"
      className="fixed bottom-6 right-[10.5rem] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg hover:scale-110 transition-transform"
    >
      <Instagram className="h-7 w-7" />
    </a>
  );
}
