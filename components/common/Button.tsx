import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-7 py-3 rounded-full font-medium transition-all duration-300",
        "inline-flex items-center justify-center",
        "cursor-pointer",
        variant === "primary" &&
          "bg-[var(--color-golden)] text-white hover:bg-[var(--color-golden-dark)] shadow-lg hover:shadow-xl",
        variant === "outline" &&
          "border-2 border-[var(--color-golden)] text-[var(--color-golden)] hover:bg-[var(--color-golden)] hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}