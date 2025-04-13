"use client";
import { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header mainRef={mainRef} footerRef={footerRef} />
      <main ref={mainRef}>{children}</main>
      <Footer footerRef={footerRef} />
    </>
  );
}
