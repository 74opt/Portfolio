import "@component/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@component/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Matthieu De Robles",
  description: "Matthieu De Robles' personal portfolio, showcasing work in theatre.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
