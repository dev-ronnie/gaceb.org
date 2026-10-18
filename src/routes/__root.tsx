import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { GacebProvider } from "@/lib/gaceb";
import { Shell } from "@/components/shell";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GACEB Scholar" },
      {
        name: "description",
        content: "Uganda curriculum study resources for O-Level and A-Level learners.",
      },
      { name: "theme-color", content: "#0e5c43" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", href: "/brand/icon-192.png" },
      { rel: "apple-touch-icon", href: "/brand/icon-192.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,560;9..144,680&family=Outfit:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="mx-auto grid max-w-xl gap-4 py-16 text-center">
      <p className="text-xs font-semibold tracking-[0.18em] text-gold-deep uppercase">Missing page</p>
      <h1 className="font-display text-4xl text-balance text-ink sm:text-5xl">This page is not on the board</h1>
      <p className="text-lg text-pretty text-muted">The link may be old. Head home, or open live events.</p>
      <div className="flex flex-wrap justify-center gap-2">
        <Link to="/" className="btn btn-primary">Home</Link>
        <Link to="/events" className="btn btn-outline">Live events</Link>
      </div>
    </div>
  ),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <GacebProvider>
            <Shell>
              <Outlet />
            </Shell>
          </GacebProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
