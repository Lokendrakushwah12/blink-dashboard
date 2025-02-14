"use client";
import { ThemeProvider } from "@/components/layouts/theme-provider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";
import { useEffect, useState } from "react";
// export const metadata: Metadata = {
//   title: "Blink Dashboard - Real-Time Data for Smarter, Safer Decisions",
//   description:
//     "Real-time tracking, legitimacy checks, and analytics for users with secure insights and foster innovation.",
//   icons: [{ rel: "icon", url: "/favicon.svg" }],
// };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures the code below only runs on the client side
  }, []);

  if (!isClient) {
    return null; // Prevent rendering until the client-side code runs
  }
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>
          Blink Dashboard - Real-Time Data for Smarter, Safer Decisions
        </title>
        <meta
          name="description"
          content="Real-time tracking, legitimacy checks, and analytics for users with secure insights and foster innovation."
        />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
        )}
      >
        {" "}
        <MetaMaskUIProvider
          sdkOptions={{
            dappMetadata: {
              name: "TokenFlow",
              url: window.location.href,
            },
            // infuraAPIKey: process.env.INFURA_API_KEY,
            // Other options
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </MetaMaskUIProvider>
      </body>
    </html>
  );
}
