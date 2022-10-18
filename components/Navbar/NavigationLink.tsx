import Link from "next/link";
import { useRouter } from "next/router";

export function NavigationLink({ href, children }: any) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`${
          router.pathname === href ? "text-white/100" : ""
        } font-normal duration-150 text-white/50 hover:text-white`}
      >
        {children}
      </a>
    </Link>
  );
}
