"use server"

import prisma from "@/lib/db"
import { itemsPerPage } from "../../utils/actions"

export async function fetchProducts(currentPage: number){
    const offset = (currentPage - 1) * itemsPerPage

    const products = await prisma.product.findMany({
        orderBy: {
            title: "asc"
        },
        take: itemsPerPage,
        skip: offset
    })

    const count = await prisma.product.count()

    const totalPages = Math.ceil(count / itemsPerPage)
    
    return {products, totalPages}
}