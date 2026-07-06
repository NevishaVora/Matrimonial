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
          "bg-[#C7A54B] text-white hover:bg-[#B18C35] shadow-lg hover:shadow-xl",
        variant === "outline" &&
          "border-2 border-[#C7A54B] text-[#C7A54B] hover:bg-[#C7A54B] hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}