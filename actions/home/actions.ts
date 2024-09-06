"use server"

import prisma from "@/lib/db"

export default async function getBestProducts(){
    const products = await prisma.product.findMany({
        select: {
            id: true,
            title: true,
            price: true
        },
        take: 5
    })

    return products
}