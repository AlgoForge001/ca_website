import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { InstagramFloat } from "../components/InstagramFloat";
import { YouTubeFloat } from "../components/YouTubeFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">Error 404</div>
        <h1 className="text-7xl font-bold text-brand-black">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-red-dark transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Prakash Gajra – Income Tax & GST Practitioner | Palghar" },
      { name: "description", content: "Trusted Income Tax & GST Practitioner in Palghar since 2001. Reliable, affordable tax services for individuals, businesses & companies across India." },
      { name: "author", content: "Prakash Gajra" },
      { property: "og:title", content: "Prakash Gajra – Income Tax & GST Practitioner | Palghar" },
      { property: "og:description", content: "Trusted Income Tax & GST Practitioner in Palghar since 2001. Reliable, affordable tax services for individuals, businesses & companies across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Prakash Gajra – Income Tax & GST Practitioner | Palghar" },
      { name: "twitter:description", content: "Trusted Income Tax & GST Practitioner in Palghar since 2001. Reliable, affordable tax services for individuals, businesses & companies across India." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/17a2a181-26ea-4e92-b0ea-7b710ce019eb/id-preview-990d5518--f74eceeb-d8db-4a66-a921-f899c671b545.lovable.app-1777559525698.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/17a2a181-26ea-4e92-b0ea-7b710ce019eb/id-preview-990d5518--f74eceeb-d8db-4a66-a921-f899c671b545.lovable.app-1777559525698.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <script src='https://www.noupe.com/embed/019ded6d33e77926b6a6f5147cb9faef0b66.js'></script>
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <InstagramFloat />
      <YouTubeFloat />
    </div>
  );
}
