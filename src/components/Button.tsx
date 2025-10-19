import { HTMLProps } from "react";
import { cva } from "class-variance-authority";
import { ButtonRoot } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  label: string;
  variant?: "default" | "reverse" | "unactive";
  onClick?: () => void;
  className?: HTMLProps<HTMLElement>["className"];
}

export const buttonVariants = cva(
  "text-neutral-white w-fit px-4 py-2 rounded-md font-bold cursor-pointer hover:opacity-80 hover:bg-primary-soft disabled:cursor-default disabled:hover:opacity-100 disabled:opacity-100",
  {
    variants: {
      variant: {
        default: "bg-primary-soft",
        reverse:
          "border border-primary-soft bg-neutral-white text-primary-soft disabled:bg-neutral-white hover:bg-neutral-white",
        unactive: "bg-neutral-muted hover:bg-neutral-muted hover:opacity-80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function Button({
  label,
  variant,
  onClick,
  className,
}: CustomButtonProps) {
  const disabled = onClick ? false : true;
  return (
    <ButtonRoot
      className={cn(buttonVariants({ variant }), className)}
      disabled={disabled}
    >
      {label}
    </ButtonRoot>
  );
}
