export const Heading1 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={
        "font-chakra text-5xl font-bold text-neutral-dark leading-tight text-center" +
        " " +
        className
      }
      {...props}
    />
  );
};
