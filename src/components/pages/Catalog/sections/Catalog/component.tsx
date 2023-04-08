import React, { FunctionComponent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Routes from 'types/routes';

import Product from 'models/Product';

import { search } from 'utils/tabs';

import List from 'components/modules/Catalog/List';

import { Props } from './index';
import StyledComponent from './styles';

const tabs = [
    { label: 'Gifts', value: 'gifts', options: [
        { label: 'Водолазки', value: 'vodolazky' },
        { label: 'Костюмы', value: 'Костюмы' },
        { label: 'Свитшоты', value: 'Свитшоты' },
        { label: 'Футболки', value:'Футболки' },
    ] },
    { label: 'Kids', value: 'kids', options: [
        { label: 'Водолазки', value: 'Водолазки' },
        { label: 'Костюмы', value: 'Костюмы' },
        { label: 'Свитшоты', value: 'Свитшоты' },
        { label: 'Футболки', value:'Футболки' },
    ] },
    { label: 'Men', value: 'men' },
    { label: 'Women', value: 'women' },
];

const PageCatalogSectionCatalog: FunctionComponent<Props> = ({ params, onChangeParams }) => {
    const router = useRouter();
    const [products, setProducts] = useState<Product[] | null>(null);
    const queries = Object.values(router?.query);

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
                <ul className="tabs-list">
                    {
                        [
                            { label: 'Главная', value: Routes.Home },
                            ...search(tabs, (queries as [string, string])),
                        ].map((element, idx, array) => (
                            <li
                                key={element.value}
                                className="list-item"
                                onClick={() => {
                                    if (array.length - 1 === idx) return null;

                                    router.push(element.value === Routes.Home ? {
                                        pathname: Routes.Home,
                                    } : {
                                        pathname: Routes.CatalogCategory,
                                        query: { slug: element.value },
                                    });
                                }}
                            >
                                <span className="data-value">{element.label}</span>
                            </li>
                        ))
                    }
                </ul>

                <div className="list-settings">

                </div>
            </div>

            {products && <List products={products} />}

        </StyledComponent>
    );
};

export default PageCatalogSectionCatalog;
