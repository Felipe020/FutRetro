import Link from "next/link";
import { DeleteButton, EditButton } from "./buttons";
import { Delete } from "lucide-react";

export default function ManageProductsTable() {
  return (
    <div className="w-full p-4 border-2 rounded-md flex flex-col gap-4 mt-5">
      <div className="flex items-center w-full justify-between">
        <span className="text-base self-end text-[#F2EBD5]">
          99 produtos encontrados...
        </span>
        <Link href={"/admin/manage/products/create"}>
          <button className="py-2 w-52 px-6 border-2 rounded-md text-[#F2EBD5] bg-[#911F27] transition-all hover:bg-[#911F27]/70">
            + Criar Categoria
          </button>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-base text-center">
          <thead className="uppercase bg-[#F2EBD5] text-[#911F27]">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    TÍTULO
                </th>
                <th scope="col" className="px-6 py-3">
                    DESCRIÇÃO
                </th>
                <th scope="col" className="px-6 py-3">
                    PREÇO
                </th>
                <th scope="col" className="px-6 py-3">
                    AÇÕES
                </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#F2EBD5] border-[#911F27]  text-[#911F27] font-bold">
                <th className="px-6 py-6">
                    1
                </th>
                <th className="px-6 py-6">
                    CAMISA FLUMINENSE
                </th>
                <th className="px-6 py-6">
                    BOM ESTADO
                </th>
                <th className="px-6 py-6">
                    $299,00
                </th>
                <th className="px-6 py-6 flex items-center justify-center gap-4">
                    <EditButton id={1}/>
                    <DeleteButton id={1}/>
                </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
