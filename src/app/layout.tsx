import type { Metadata } from "next";
import { Lato, Nunito_Sans } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/queryClientProvider";
import ToasterProvider from "@/components/toasterProvider";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Lingua Span",
  description: "Lingua Span",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${nunitoSans.className}`}>
        <QueryProvider>
          {children}
          <ToasterProvider />
        </QueryProvider>
        </body>
      </html>
  );
}
