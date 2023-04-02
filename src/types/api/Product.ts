

export default interface Product {
    id: string;
    discount_price?: number;
    discount?: number | null;
    name?: string;
    price?: number;
    slug?: string;
    active?: boolean;
    quantity?: number;
    title?: string;
    description?: string;
    category?: string;
    coverPhoto?: string;
}
