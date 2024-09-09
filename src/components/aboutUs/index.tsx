import Image from "next/image";

export function AboutUs() {
  return (
    <div className="w-full lg:w-10/12 lg:m-auto flex flex-wrap justify-center gap-6 bg-red-900">
      <Image
        src="/logo/logo_transparent.png"
        alt="logo"
        width={904}
        height={904}
        className="max-h-[300] max-w-[300px] xl:max-h-[550px] xl:max-w-[550px] 2xl:max-h-[650px] 2xl:max-w-[650px] 3xl:max-h-[750px] 3xl:max-w-[750px] object-cover overflow-hidden"
      />
      <div className="flex flex-col flex-grow justify-center gap-8 p-4 w-4/12">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#F2EBD5] text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold">
            Sobre nós
          </h1>
          <span className="text-[#F2EBD5] text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed tracking-widest">
            Um pouco mais sobre como trabalhamos.
          </span>
          <p className="text-[#F2EBD5] text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-justify">
            Bem-vindo à nossa loja de camisas de time retrô, onde a paixão pelo
            futebol e a nostalgia se encontram! Somos especializados em trazer
            de volta as memórias dos grandes momentos do esporte, oferecendo uma
            ampla seleção de camisas clássicas de clubes e seleções que marcaram
            época. Cada peça é cuidadosamente selecionada para garantir
            autenticidade e qualidade, proporcionando aos nossos clientes a
            chance de reviver a história e exibir com orgulho suas cores
            favoritas. Aqui, celebramos o futebol de todas as gerações,
            proporcionando uma experiência única para os verdadeiros amantes do
            esporte.
          </p>
        </div>
      </div>
    </div>
  );
}
