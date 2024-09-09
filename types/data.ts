export type Product = {
    id?: number,
    title?: string,
    description?: string | null,
    price?: number
} | null;

export type IndividualProduct = {
    id?: number;
    title?: string;
    description?: string | null;
    price?: number;
} | null;