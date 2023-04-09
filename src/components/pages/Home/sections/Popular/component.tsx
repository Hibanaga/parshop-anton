import React, { FunctionComponent, useEffect, useState } from 'react';
import Image from 'next/image';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import Product from 'models/Product';

import { Props } from './index';
import StyledComponent from './styles';

const PageHomeSectionPopular: FunctionComponent<Props>  = ({  }) => {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [category, setCategory] = useState<string | null>('women');

    useEffect(() => {
        getProducts(category);
    }, [JSON.stringify(category)]);

    const getProducts = async (category: string | null) => {
        const response = {
            //TODO: Replace with request after api works
            elements: Array.from({ length: 6 }, (_, index) => (new Product({
                id: index.toString(),
                name: 'Костюм женский JUST BEAUTIFUL',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nunc, blandit viverra luctus quis, cursus et neque. Sed imperdiet vestibulum tempus. Fusce nec malesuada sapien, id tempor mi. Phasellus commodo et nisi et condimentum. Proin quis hendrerit dolor, quis pulvinar lorem.',
                price: 15.32,
                imageUrl: 'https://parshop.by/wp-content/uploads/2023/03/128-2-800x800.jpg',
            }))),
        };

        setProducts(response.elements);
    };

    return (
        <StyledComponent className="page-home-section-popular">
            <div className="inner-header">
                <span className="category-title">POPULAR</span>
                <h2 className="title">ПОПУЛЯРНОЕ</h2>

                <ul className="list-categories">
                    {
                        [
                            { label: 'WOMEN', value: 'women' },
                            { label: 'MEN', value: 'men' },
                            { label: 'KIDS', value: 'kid' },
                        ].map((element) => (
                            <li
                                key={element.value}
                                className={classNames(['list-item', { active: category === element.value }])}
                                onClick={() => setCategory(element.value)}
                            >
                                <span className="data-value">{element.label}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="popular-list">
                {products?.map((element) => (
                    <div
                        key={element.id}
                        className="popular-list-element"
                    >

                        <div className="button-show">
                            <FontAwesomeIcon
                                className="icon"
                                icon={faMagnifyingGlass}
                            />
                        </div>

                        {element?.imageUrl && (
                            <div className="inner-image">
                                <Image
                                    fill
                                    objectFit="cover"
                                    src={element?.imageUrl}
                                    alt={element?.imageUrl}
                                />
                            </div>
                        )}

                        <div className="inner-content">
                            <span className="data-name">{element.name}</span>
                            <div className="inner-scollable">
                                <span className="data-price">{element.priceDisplay}</span>
                                <span className="show-more">Выберите елемент</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </StyledComponent>
    );
};

export default PageHomeSectionPopular;
