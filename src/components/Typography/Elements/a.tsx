import { AnchorHTMLAttributes } from "react";

export const LinkText = ({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className={
        "font-sans text-sm text-primary underline hover:text-primary-soft transition-colors" +
        " " +
        className
      }
      {...props}
    />
  );
};
