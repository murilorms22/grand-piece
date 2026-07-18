"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { cn } from "@/lib/utils";

import { HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "sm";
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  const { openModal } = useModal();

  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#2C4C3B] via-[#3D6B53] to-[#1A2F24] text-white hover:from-[#3D6B53] hover:via-[#4F8A6B] hover:to-[#2C4C3B] shadow-[0_4px_14px_0_rgba(44,76,59,0.4)] hover:shadow-[0_6px_20px_rgba(44,76,59,0.6)]",
    secondary: "bg-[#1A1A1A] text-white hover:bg-[#333333]",
    outline: "border border-[#2C4C3B] text-[#2C4C3B] hover:border-transparent hover:bg-gradient-to-r hover:from-[#2C4C3B] hover:via-[#3D6B53] hover:to-[#1A2F24] hover:text-white"
  };

  const sizes = {
    default: "h-12 px-8 text-base",
    sm: "h-10 px-6 text-sm",
    lg: "h-14 px-10 text-lg uppercase tracking-wide"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (props.onClick) {
          props.onClick(e);
        } else if (props.type !== "submit") {
          openModal();
        }
      }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
