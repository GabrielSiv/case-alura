export const Heading2 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={
        "font-chakra text-4xl font-semibold text-neutral-dark leading-snug text-center" +
        " " +
        className
      }
      {...props}
    />
  );
};
