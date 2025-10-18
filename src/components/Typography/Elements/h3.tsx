export const Heading3 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={
        "font-chakra text-2xl font-semibold text-neutral-dark leading-snug text-left" +
        " " +
        className
      }
      {...props}
    />
  );
};
