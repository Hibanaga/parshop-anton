import React, { FunctionComponent, useEffect, useState } from 'react';

import Product from 'models/Product';

import List from 'components/modules/Catalog/List';

import { Props } from './index';
import StyledComponent from './styles';


const PageCatalogSectionCatalog: FunctionComponent<Props> = ({ params, onChangeParams }) => {
    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        getProducts(params);
    }, [JSON.stringify(params)]);

    const getProducts = async (filters: { [key: string]: any }) => {
        const response = {
            elements: Array.from(Array(10).keys()).map((id) => new Product({
                id: id.toString(),
                name: 'Костюм женский JUST BEAUTIFUL',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
                price: 13 * id + 1,
                imageUrl: 'https://parshop.by/wp-content/uploads/2023/03/28-600x600.jpg',
            })),
        };

        setProducts(response.elements);
    };

    return (
        <StyledComponent className="page-catalog-section-catalog">
            <div className="inner-hero">

            </div>

            {products && <List products={products} />}

        </StyledComponent>
    );
};

export default PageCatalogSectionCatalog;
