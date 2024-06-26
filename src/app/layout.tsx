import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import { BackgroundCursor, StarBackground } from "@/components";
import { Analytics } from "@vercel/analytics/react";
import SiteMetadata from "@/constants/metadata";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next"

const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"], variable: "--font-main", display: "swap" });

export const metadata = SiteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <BackgroundCursor>{children}</BackgroundCursor>
        <StarBackground />
        <Toaster position="bottom-center" />
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
