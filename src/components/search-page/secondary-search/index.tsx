import { Search as SearchIcon } from "lucide-react";

type SecondarySearchProps = {
  count: number;
};

export default function SecondarySearch({ count }: SecondarySearchProps) {
  return (
    <form
      className="flex w-full  justify-center" 
      id="secondary-search"
      autoComplete="off"
    >
      <div className="flex flex-col w-full lg:w-10/12 gap-2 my-10 mx-auto">
        <div className="relative flex items-center w-full">
          <SearchIcon className="w-7 h-7 absolute text-black/50 left-4" />
          <input
            id="secondary-search-input"
            name="secondary-search-input-name"
            type="text"
            className="w-full rounded-xl px-16 py-6 text-black border-black/50 transition-all duration-300 bg-[#F2EBD5]"
          />
        </div>
        <span className="text-[#F2EBD5]/70 ">
          Total de {count} publicações encontradas
        </span>
      </div>
    </form>
  );
}
