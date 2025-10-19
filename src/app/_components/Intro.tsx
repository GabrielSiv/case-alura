import Image from "next/image";

const introText = {
  greeting: "Olá, meu nome é Fernanda_",
  title: "Eu ensino",
  highlight: "Programação",
  description:
    "Sou Engenheira de Computação e Pedagoga. Ensino pensamento computacional para estudantes do Ensino Fundamental e Médio. Ensino sobre pensamento computacional usando HTML, CSS e JavaScript. Veja os projetos que já desenvolvi!",
};

const separators = [
  { src: "/separator-left.svg", alt: "Separador esquerdo" },
  { src: "/separator-middle.svg", alt: "Separador central" },
  { src: "/separator-right.svg", alt: "Separador direito" },
];

export function Intro() {
  return (
    <section
      className="flex flex-col items-center self-center w-fit gap-12 sm:gap-28"
      aria-label="Apresentação da autora"
    >
      <div className="flex flex-col items-center text-center gap-6 px-4">
        <figure className="w-56 h-56 relative rounded-full overflow-hidden">
          <Image src="/profile-img.png" alt="Foto de perfil de Fernanda" fill />
        </figure>
        <div className="flex flex-col gap-6">
          <h3 className="heading-3 text-sm sm:text-base font-bold text-primary-soft text-center">
            {introText.greeting}
          </h3>
          <h1 className="heading-1 sm:text-6xl font-bold text-center leading-tight">
            {introText.title}{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary-soft via-accent-purple-strong to-primary-soft">
              {introText.highlight}
            </span>
          </h1>
          <p className="paragraph text-center text-text-soft self-center max-w-xl">
            {introText.description}
          </p>
        </div>
      </div>
      <div
        className="w-full h-[28px] flex items-center justify-between relative"
        aria-hidden="true"
      >
        {separators.map(({ src, alt }, index) => (
          <Image
            key={index}
            src={src}
            alt={alt}
            width={28}
            height={28}
            priority
          />
        ))}
      </div>
    </section>
  );
}
