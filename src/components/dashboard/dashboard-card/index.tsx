import { Settings } from "lucide-react";
import Link from "next/link";

type DashboardCardProps = {
  title: string;
  href: string;
  description: string;
};

export default function DashboardCard({
  title,
  href,
  description,
}: DashboardCardProps) {
  return (
    <div className="flex justify-center items-center w-full sm:w-auto">
      <Link
        href={href}
        className="hover:scale-[1.02] transition-all duration-200 w-full sm:w-72 bg-[#F2EBD5] rounded-lg p-4 font-semibold"
      >
        <div className="flex flex-col justify-center h-full">
          <div className="flex justify-between items-center text-[#911F27] mb-2">
            <h3 className="text-xl">{title}</h3>
            <Settings />
          </div>
          <span className="text-[#911F27] text-sm">{description}</span>
        </div>
      </Link>
    </div>
  );
}
