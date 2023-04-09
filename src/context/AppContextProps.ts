import Product from 'models/Product';

export interface AppContextProps {
    shoppingCart?: Product[];
    fetchShoppingCart?: (params?: any) => void;
    onRemoveElement?: (product: Product) => void;
    onAddElement?: (product: Product) => void;
}
