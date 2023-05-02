import { ShoppingCartProps } from 'types/options';

import Product from 'models/Product';

export interface AppContextProps {
    shoppingCart?: Product[];
    storageShoppingCart?: ShoppingCartProps[];
    fetchShoppingCart?: (params?: any) => void;
    onRemoveElement?: (product: Product) => void;
    onAddElement?: (product: Product, size: string, quantity: number) => void;
}
