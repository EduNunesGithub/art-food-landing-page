import React from "react";
import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

type BaseProps = {
  size?: "normal" | "small";
  theme?: "primary" | "orange";
};

type ButtonAsLink = {
  asLink: true;
} & LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseProps;

type ButtonAsButton = {
  asLink?: false | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  BaseProps;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    asLink,
    size = "normal",
    theme = "primary",
    ...rest
  } = props;

  const classname = twMerge(
    "duration-200 cursor-pointer ease-standard flex font-medium items-center justify-center max-w-full text-center transition-all w-fit",
    "hover:scale-105 hover:brightness-75",
    size === "small" && "min-h-8 px-4 rounded text-sm",
    size === "normal" && "min-h-10 px-4 rounded-lg text-sm",
    theme === "primary" && "bg-primary text-white",
    className,
  );

  if (asLink) return <Link {...(rest as ButtonAsLink)} className={classname} />;
  else return <button {...(rest as ButtonAsButton)} className={classname} />;
};
