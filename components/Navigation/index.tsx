import { NavigationLink } from "./NavigationLink";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 pt-2 pb-4">
      <Link href="/">
        <a className="text-2xl font-bold font-clashdisplay">FANCAM</a>
      </Link>

      <div className="space-x-4">
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/Catalogue">Catalogue</NavigationLink>
      </div>
    </nav>
  );
}