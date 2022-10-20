import Link from "next/link";
import * as React from "react";

interface BaseButtonProps {
  [key: string]: unknown;
  color: string;
}

type ButtonAsButton = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

function BaseButton({ href = null, forwardedRef = null, ...rest }: any) {
  return (
    <Link href={href}>
      <a {...rest} />
    </Link>
  );
}

const baseClasses =
  "flex space-x-2 flex-none items-center justify-center cursor-pointer rounded-md border-2 transition duration-150 ease-in-out px-2 py-1 text-sm h-max w-max";

function getColor(color = null) {
  switch (color) {
    case "white": {
      return "text-white border-white hover:bg-white hover:text-black";
    }
    case "black": {
      return "text-black border-black hover:bg-black hover:text-white";
    }
  }
}

function getGhostColor(TextColor = null) {
  switch (TextColor) {
    case "white": {
      return "text-white hover:bg-white/25";
    }
    case "black": {
      return "text-black hover:bg-black/25";
    }
  }
}

const composer = {
  getColor,
  getGhostColor,
};

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef((props: ButtonProps, ref) => {
  const color = composer.getColor(props.color);
  const composed = `${baseClasses} ${color}`;
  return <BaseButton forwardedRef={ref} className={composed} {...props} />;
});

// eslint-disable-next-line react/display-name
export const GhostButton = React.forwardRef((props: ButtonProps, ref) => {
  const Color = composer.getGhostColor(props.color);
  const composed = `${baseClasses} ${Color} border-none`;
  return <BaseButton forwardedRef={ref} className={composed} {...props} />;
});
