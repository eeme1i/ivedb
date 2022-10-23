import Link from "next/link";
import { useRouter } from "next/router";

export function NavigationLink({ href, children }: any) {
  const router = useRouter();
  return (
    <Link href={`${href}/`}>
      <a
        className={`${
          router.pathname === href ? "text-white/100" : "text-white/50"
        } font-normal duration-150  hover:text-white`}
      >
        {children}
      </a>
    </Link>
  );
}
