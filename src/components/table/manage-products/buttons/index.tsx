"use client";

import Link from "next/link";
import { deleteProduct } from "../../../../../actions/admin/products/actions";

export function EditButton({ id }: { id: number | undefined }) {
  return (
    <Link href={`/admin/manage/products/edit/${id}`}>
      <button className="font-medium text-[#F2EBD5] bg-[#911F27] hover:underline rounded-lg p-2">
        Editar
      </button>
    </Link>
  );
}

export function DeleteButton({ id }: { id: number | undefined }) {
  return (
    <div>
      <button
        onClick={() => deleteProduct(id)}
        className="font-medium text-[#F2EBD5] bg-[#911F27] hover:underline rounded-lg p-2 "
      >
        Deletar
      </button>
    </div>
  );
}
