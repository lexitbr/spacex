import type { Metadata } from "next";
import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "SpaceX Rockets - Next.js + Radix UI + Full SSR",
  description:
    "A simple app to view SpaceX rockets using Next.js and Radix UI, full server-side rendering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme appearance="dark">
          <NextTopLoader />
          <Container size="2" px="4" py="6">
            {children}
          </Container>
        </Theme>
      </body>
    </html>
  );
}
