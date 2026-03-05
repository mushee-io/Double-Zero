import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { SiteNav } from "./components/site-nav";

export const metadata: Metadata = {
  title: "Mushee",
  description: "Private network intelligence for high-performance systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen">
            <SiteNav />
            {children}

            <footer className="px-6 pb-10 pt-16">
              <div className="mx-auto max-w-6xl card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                
                <div className="text-sm text-black/70">
                  <span className="font-semibold text-black">Mushee</span> • UK Incorporated • mushee.xyz
                </div>

                <div className="text-sm text-black/70">
                  Follow Mushee on X:{" "}
                  <a
                    className="link font-semibold"
                    href="https://x.com/mushee_io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @mushee_io
                  </a>
                </div>

              </div>
            </footer>

          </div>
        </Providers>
      </body>
    </html>
  );
}
