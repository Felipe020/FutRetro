"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchProductsAdmin(){
    const products = await prisma.product.findMany({
        orderBy: {
            id: "asc"
        }    
    });

    const count = await prisma.product.count();

    return {products, count};
}

export async function fetchProductById(id: number | undefined){
    const product = await prisma.product.findUnique({
        where:{id},
        select: {
            id: true,
            title: true,
            description: true,
            price: true
        }
    })

    return product;
}

export async function deleteProduct(id: number | undefined){
    await prisma.product.delete({
        where: {id},
    });

    revalidatePath("/admin/manage/products")
}

export async function createProduct(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const priceString = formData.get("price") as string;

    const price = parseFloat(priceString);

    await prisma.product.create({
        data: {
            title,
            description,
            price
        }
    })

    redirect("/admin/manage/products")
}

export async function editProduct(id: number | undefined, formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const priceString = formData.get("price") as string;

    const price = parseFloat(priceString);

    await prisma.product.update({
        where: {id},
        data: {
            title,
            description,
            price
        }
    })

    redirect("/admin/manage/products")
}