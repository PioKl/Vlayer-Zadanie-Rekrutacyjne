import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./styles/base/globals.scss";

// Konfiguracja czcionki
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  preload: true,
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Estatery",
  description: "Vlayer Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className}`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
