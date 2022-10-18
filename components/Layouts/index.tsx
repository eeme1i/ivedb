import React from "react";
import { Navbar } from "../Navbar";

export function SiteLayout({ children }: any) {
  return (
    <>
      <div className="p-2 sm:p-8 sm:py-4">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
