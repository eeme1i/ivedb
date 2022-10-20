import Link from "next/link";
import React from "react";

function BaseLink({ href = null, forwardedRef = null, ...rest }: any) {
  return (
    <Link href={href}>
      <a {...rest} />
    </Link>
  );
}

const baseClasses = " transition duration-150 ease-in-out space-x-2 underline ";

function getColor(color = null) {
  switch (color) {
    case "white": {
      return "text-white/50 hover:text-white/100";
    }
    case "black": {
      return "text-black/50 hover:text-black/100";
    }
  }
}

const composer = {
  getColor,
};

// eslint-disable-next-line react/display-name
export const StandardLink = React.forwardRef((props: any, ref) => {
  const color = composer.getColor(props.color);
  const composed = `${baseClasses} ${color}`;
  return <BaseLink forwardedRef={ref} className={composed} {...props} />;
});
