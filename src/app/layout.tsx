import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'KSI RACING | Premium Car Modification & Tuning',
  description: 'Unleash your vehicle\'s full potential with KSI RACING\'s expert car modification and tuning services. Experience unparalleled performance and custom aesthetics.',
  keywords: ["car tuning, car modification, racing, performance, custom cars, KSI RACING, auto shop, Thailand tuning"],
  openGraph: {
    "title": "KSI RACING | Premium Car Modification & Tuning",
    "description": "Expert car modification and tuning services for ultimate performance.",
    "url": "https://ksiracing.com",
    "siteName": "KSI RACING",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3934.jpg",
        "alt": "High-performance custom car"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "KSI RACING | Premium Car Modification & Tuning",
    "description": "Expert car modification and tuning services for ultimate performance.",
    "images": [
      "http://img.b2bpic.net/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3934.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
