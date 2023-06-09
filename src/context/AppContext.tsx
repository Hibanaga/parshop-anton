import { Context, createContext, FunctionComponent, ReactElement, useContext, useState } from 'react';

import { ShoppingCartProps } from 'types/options';

import Product from 'models/Product';

import { getItem, setItem } from 'utils/localStorage';

import { AppContextDefaults } from './AppContextDefault';
import { AppContextProps } from './AppContextProps';


const AppContext: Context<AppContextProps> = createContext(AppContextDefaults);
const AppState = (): AppContextProps => {
    const [storageShoppingCart, setStorageShoppingCart] = useState<ShoppingCartProps[] | []>([]);
    const [shoppingCart, setShoppingCart] = useState<Product[] | []>([]);

    const fetchShoppingCart = async (params: any) => {
        const shoppingCart = getItem('shoppingCart');
        const parsedShoppingCart = JSON.parse(shoppingCart as string);

        //TODO: refactor where get access api
        const response = {
            elements: Array.from(Array(100).keys()).map((id) => ({
                id: id.toString(),
                name: 'Костюм женский JUST BEAUTIFUL',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
                price: 13 * id + 1,
                imageUrl: 'https://parshop.by/wp-content/uploads/2023/03/28-600x600.jpg',
            })),
        };

        const products = parsedShoppingCart.map((element: ShoppingCartProps) => {
            const searchElement = response.elements.find((product) => product.id === element.id);
            return new Product({ ...element, ...searchElement });
        });

        setShoppingCart(products);
        setStorageShoppingCart(parsedShoppingCart);
    };

    const handleAddShoppingCartElement = (product: Product, size: string, quantity: number) => {
        const storageCart = getItem('shoppingCart');

        let shoppingCart = null;
        if (!storageCart) {
            shoppingCart = [{ id: product.id, size: size, quantity: quantity }];
        } else {
            const parseStorageCart = JSON.parse(storageCart);

            if (parseStorageCart.some((element: { id: string, size: string }) => element.id === product.id && element.size === size )) {
                shoppingCart = parseStorageCart.map((element: ShoppingCartProps) => element.id === product.id && element.size === size  ? { id: element.id, quantity: element.quantity + quantity, size } : element);
            } else {
                shoppingCart = [ ...parseStorageCart, { id: product.id, size: size, quantity: quantity } ];
            }
        }

        setItem('shoppingCart', JSON.stringify(shoppingCart));
        setStorageShoppingCart(shoppingCart);
    };

    const handleRemoveShoppingCartElement = (product: Product) => {
        setShoppingCart(shoppingCart.filter((element) => element.id !== product.id));
    };


    return {
        shoppingCart,
        storageShoppingCart,
        fetchShoppingCart,
        onAddElement: handleAddShoppingCartElement,
        onRemoveElement: handleRemoveShoppingCartElement,
    };
};


const AppContextProvider: FunctionComponent<{ children: ReactElement }> = ({ children }) => {
    const state = AppState();

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('Context must be used within a ContextProvider');
    }
    return context;
};

export { AppContextProvider, useAppContext, AppContext };
