import React from "react";
import { Navbar } from "../Navbar";

export function SiteLayout({ children }: any) {
  return (
    <>
      <div className="p-2 sm:p-8 sm:py-4">
        <Navbar />
        <main className="h-full p-2 border border-white border-t-transparent sm:px-4">
          {children}
        </main>
      </div>
    </>
  );
}
