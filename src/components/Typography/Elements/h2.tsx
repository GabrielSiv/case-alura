import { HTMLAttributes } from "react";

export const Heading2 = ({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={
        "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance" +
        " " +
        className
      }
      {...props}
    />
  );
};
