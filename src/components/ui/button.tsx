import { cn } from "@/utils";
import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  as?: React.ElementType;
}

export default function Button({ as, href, className, ...props }: ButtonProps) {
  const Comp = as ?? (href ? Link : "button");

  // @ts-ignore
  return (
    <Comp
      href={href}
      className={cn(
        "px-4 py-1 card-background rounded-md",
        "hover:scale-105 transition-all duration-300 active:scale-95 ease-in-out transform hover:shadow-lg",
        "text-sm",
        className
      )}
      {...props}></Comp>
  );
}
