import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;

  href?: string;

  variant?: "primary" | "secondary" | "dark" | "light";

  size?: "default" | "sm";

  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
}: ButtonProps) {
  const classes = [
    "btn",
    `btn-${variant}`,
    size === "sm" ? "btn-sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
