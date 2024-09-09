import { Send, Plane } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-[url('/bg/maraca.png')] min-h-screen bg-cover">
      <div className="flex flex-col justify-center gap-12 p-4 h-full overflow-hidden items-center ">
        <div className="flex flex-col gap-6 leading-relaxed">
          <h1 className="text-[#F2EBD5] text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold uppercase text-center">
            Além de camisas vendemos histórias.
          </h1>
          <p className="text-[#F2EBD5] text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold text-center">
            Se você é um amante ou colecionador, clique para conhecer nossos
            produtos.
          </p>
        </div>

        <Link
          href="/produtos"
          className="w-full flex items-center justify-center gap-2"
        >
          <button className="bg-[#911F27] w-full md:w-10/12 text-[#F2EBD5] px-6 py-2 rounded-xl md:text-lg lg:text-2xl xl:text-2xl duration-200 font-semibold hover:bg-red-800 flex items-center justify-center gap-2">
            <Send className="w-7 h-7 text-[#F2EBD5]" />
            Quero conhecer
          </button>
        </Link>
      </div>
    </div>
  );
}
