import { Instagram } from "lucide-react";

export function InstagramFloat() {
  return (
    <a
      href="https://www.instagram.com/prakash.parapowerlifter?utm_source=qr&igsh=ZjRoOW41ZzNoM2F3"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow on Instagram"
      className="fixed bottom-6 right-[88px] z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg hover:scale-110 transition-transform"
      style={{
        background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
      }}
    >
      <Instagram className="h-7 w-7" />
    </a>
  );
}
