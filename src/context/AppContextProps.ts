import Product from 'models/Product';

export interface AppContextProps {
    shoppingCart?: Product[];
    fetchShoppingCart?: (params?: any) => void;
}
