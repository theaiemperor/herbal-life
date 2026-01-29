import Wrapper from "@/components/global/Wrapper";
import { ThemeProvider } from "@/lib/shad_cn/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PropsWithChildren } from "react";
import "../lib/shad_cn/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Herbal life ",
  description: "Your digital gateway to authentic fitness, nutrition, and wellness",
  icons: [{ url: 'https://www.herbalife.com/favicon.ico' }]
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Wrapper>
            {children}
          </Wrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
