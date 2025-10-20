import Image from "next/image";
import {
  CardRoot,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PostCardProps {
  imageUrl: string;
  title: string;
  description: string;
  category: string;
  href: string;
}

export function Card({
  imageUrl,
  title,
  description,
  category,
  href,
}: PostCardProps) {
  return (
    <CardRoot className="w-full max-w-sm overflow-hidden bg-background-base text-text-base border-primary-soft rounded-md hover:shadow-xl/30 shadow-primary-soft">
      <div className="relative w-full h-55 px-6 pt-6">
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={`Imagem ilustrativa do card: ${title}`}
            sizes="(max-width: 318px) 100vw"
            fill
            className="object-cover rounded-md"
          />
          <span className="absolute bottom-0 right-0 bg-primary-soft text-white text-xs font-medium py-[6px] px-[24px] rounded-none">
            {category}
          </span>
        </div>
      </div>
      <CardHeader className="px-6 pt-4 pb-2 gap-3">
        <CardTitle>
          <h3 className="font-chakra text-xl font-bold text-foreground text-left leading-snug line-clamp-2">
            {title}
          </h3>
        </CardTitle>
        <CardDescription>
          <p className="paragraph line-clamp-3">{description}</p>
        </CardDescription>
      </CardHeader>
      <CardFooter className="px-6 pb-6 pt-3">
        <a
          href={href}
          className="font-sans text-base font-bold text-primary-soft hover:underline transition-colors"
        >
          Ver projeto
        </a>
      </CardFooter>
    </CardRoot>
  );
}
