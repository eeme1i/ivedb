import React from "react";
import { Navbar } from "../Navigation";

export function SiteLayout({ children }: any) {
  return (
    <>
      <div className="max-w-[1440px] p-4 mx-auto sm:p-8 sm:py-4">
        <Navbar />
        <main className="h-full ">{children}</main>
      </div>
    </>
  );
}
