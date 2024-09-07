import prisma from "@/lib/db";
import { itemsPerPage } from "../../utils/actions";

export async function fetchFilteredProducts(query: string, currentPage: number){
    const offset = (currentPage - 1) * itemsPerPage

    const products = await prisma.product.findMany({
        where: {
            OR: [{title: {contains: query, mode: "insensitive"}}]
        },
        orderBy:{
            title: "asc"
        },
        
        take: itemsPerPage,
        skip: offset
    });

    const count = await prisma.product.count({
        where: {
            OR: [{title: {contains: query, mode: "insensitive"}}]    
        }
    });

    const totalPages = Math.ceil(count / itemsPerPage)

    return { products, count, totalPages };
}