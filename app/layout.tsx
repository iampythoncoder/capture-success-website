import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import { MotionController } from "@/components/MotionController";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-geist"
});

export const metadata: Metadata = {
  title: "Capture Success — 10+ student-led startups",
  description:
    "Capture Success partners with NC State to connect student founders with business, entrepreneurship, mentorship, and venture-building opportunities.",
  applicationName: "Capture Success",
  icons: {
    icon: "/brand/capture-mark.png",
    apple: "/brand/capture-mark.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <MotionController />
        {children}
      </body>
    </html>
  );
}
