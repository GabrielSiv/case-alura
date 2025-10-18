export const Paragraph = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={
        "font-sans text-base text-neutral-gray leading-relaxed text-left" +
        " " +
        className
      }
      {...props}
    />
  );
};
