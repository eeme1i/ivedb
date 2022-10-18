import { NavigationLink } from "./NavigationLink";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 border border-white">
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
