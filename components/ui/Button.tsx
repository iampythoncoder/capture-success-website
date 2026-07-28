import type { ReactNode } from "react";
import { ArrowUpRightIcon, ArrowRightIcon } from "../Icons";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "text" | "inverse";
  external?: boolean;
  newTab?: boolean;
  arrow?: "right" | "external" | "none";
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  className = "",
  variant = "primary",
  external = false,
  newTab = false,
  arrow = external ? "external" : "right",
  ariaLabel
}: ButtonProps) {
  const opensNewTab = external || newTab;

  return (
    <a
      className={`button button-${variant} ${className}`.trim()}
      href={href}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noreferrer noopener" : undefined}
      aria-label={ariaLabel}
      data-magnetic
    >
      <span className="button-inner">
        <span>{children}</span>
        {arrow === "external" ? <ArrowUpRightIcon /> : null}
        {arrow === "right" ? <ArrowRightIcon /> : null}
      </span>
    </a>
  );
}
