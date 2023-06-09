import ApiProduct from 'types/api/Product';

export default class Product {
    id: string;
    name?: string;
    slug?: string;
    description?: string;
    imageUrl?: string;
    hoverImageUrl?: string;
    images?: string[];
    price?: number;
    category?: string;
    size?: string;

    priceDisplay?: 0 | undefined | string;
    accesibility?: boolean;
    quantity?: number;
    totalPrice: number | undefined;

    constructor(data: ApiProduct) {
        this.id = data.id;
        this.slug = data.slug;
        this.name = data.name && data.name;
        this.description = data?.description;
        this.imageUrl = data?.imageUrl;
        this.hoverImageUrl = data?.hoverImageUrl;
        this.images = data?.images;
        this.price = data.price && data.price;
        this.category =  data?.category;
        this.size = data?.size;

        this.accesibility = data?.active ?? false;
        this.priceDisplay = data.price && this.getFormattedPrice(data.price ?? 0);
        this.quantity = data?.quantity;
        this.totalPrice = data?.price && data?.quantity && this.getTotalPrice(data.price, data.quantity);
    }

    getTotalPrice (price: number, quantity: number) {
        return price * quantity;
    }

    getFormattedPrice (price: number): string {
        return price + ' BYN';
    }
}
