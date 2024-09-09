import Image from "next/image";

type KnowFutRetroCardProps = {
  id: number;
  title: string;
  text: string;
};

export default function KnowFutRetroCard({
  id,
  title,
  text,
}: KnowFutRetroCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-sm 2xl:max-w-md 3xl:max-w-lg p-8 transition-shadow duration-200 rounded-md hover:shadow-2xl bg-[#911F27]">
      <h1 className="text-center text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-[#F2EBD5] font-semibold cursor-default">
        {title}
      </h1>
      <p className="text-[#F2EBD5] text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-center cursor-default">
        {text}
      </p>
    </div>
  );
}
