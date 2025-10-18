import { HTMLAttributes } from "react";

export const Paragraph = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={
        "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance" +
        " " +
        className
      }
      {...props}
    />
  );
};
