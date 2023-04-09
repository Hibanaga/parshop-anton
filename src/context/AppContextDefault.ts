
import Product from 'models/Product';

import { AppContextProps } from './AppContextProps';

export const AppContextDefaults: AppContextProps = {
    shoppingCart: [],
    fetchShoppingCart: () => null,
    onRemoveElement: (product: Product) => null,
    onAddElement: (product: Product) => [],
};
