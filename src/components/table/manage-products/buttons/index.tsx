"use client";

import Link from "next/link";

export function EditButton({ id }: { id: number }) {
  return (
    <Link href={`/admin/manage/products/edit/${id}`}>
      <button className="font-medium text-[#F2EBD5] bg-[#911F27] hover:underline rounded-lg p-2">
        Editar
      </button>
    </Link>
  );
}

export function DeleteButton({ id }: { id: number }) {
  return (
    <div>
      <button className="font-medium text-[#F2EBD5] bg-[#911F27] hover:underline rounded-lg p-2 ">
        Deletar
      </button>
    </div>
  );
}
