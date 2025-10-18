import { AnchorHTMLAttributes } from "react";

export const LinkText = ({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className={
        "underline text-blue-600 hover:text-blue-800 visited:text-purple-600" +
        " " +
        className
      }
      {...props}
    />
  );
};
