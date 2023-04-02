import ApiProduct from 'types/api/Product';
import { OptionName } from 'types/options';

export default class Product {
    id: string;
    name?: string;
    description?: string;
    imageUrl?: string;
    images?: string[];
    price?: number;
    category?: string;

    fullDisplayName?: string;
    priceDisplay?: 0 | undefined | string;
    categories?: OptionName<string>[];
    accesibility?: boolean;
    quantity?: number;
    totalPrice: number | undefined;

    constructor(data: ApiProduct) {
        this.id = data.id;
        this.name = data.name && data.name;
        this.description = data?.description;
        this.imageUrl = data?.coverPhoto;
        this.price = data.price && data.price;
        this.category =  data?.category;

        this.accesibility = data?.active ?? false;
        this.priceDisplay = data.price && this.getFormattedPrice(data.price ?? 0);
        this.quantity = data?.quantity;
        this.totalPrice = data?.price && data?.quantity && this.getTotalPrice(data.price, data.quantity);
    }

    getTotalPrice (price: number, quantity: number) {
        return price * quantity;
    }

    getFormattedPrice (price: number): string {
        const formatter = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' });

        return formatter.format(price);
    }
}
