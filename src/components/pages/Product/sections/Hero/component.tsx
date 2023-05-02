import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { useAppContext } from 'context/AppContext';

import Product from 'models/Product';

import Button from 'components/layout/Button';
import Counter from 'components/layout/Counter';

import { Props } from './index';
import StyledComponent from './styles';

const PageProductSectionHero: FunctionComponent<Props> = ({ product }) => {
    const { onAddElement } = useAppContext();
    const [counter, setCounter] = useState(1);
    const [size, setSize] = useState('');

    const handleAddElementToShoppingCart = (product: Product, quantity: number, size: string) => {
        onAddElement && onAddElement(product, size, quantity);
    };

    return (
        <StyledComponent className="page-product-section-hero">
            <div className="columns">
                <div className="column-image">
                    <div className="side-images">
                        {product?.images && product.images.map((element) => (
                            <div
                                key={element}
                                className="inner-side-image"
                            >
                                <Image
                                    fill
                                    objectFit="cover"
                                    src={element}
                                    alt={element || ''}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="cover-image">
                        {product?.imageUrl && (
                            <Image
                                fill
                                objectFit="cover"
                                src={product.imageUrl}
                                alt={product?.name || ''}
                            />
                        )}

                    </div>
                </div>
                <div className="column-info">
                    <h3 className="data-headline">{product.name}</h3>
                    <span className="data-price">{product?.priceDisplay}</span>

                    <span className="data-description">{product.description}</span>

                    <div className="inner-colors">

                    </div>

                    <ul className="list-sizes">
                        {
                            [
                                { label: 'S', value: 's' },
                                { label: 'M', value: 'm' },
                            ].map(({ label, value }) => (
                                <li
                                    key={value}
                                    className={classNames(['list-item', { active: size === value }])}
                                    onClick={() => setSize(value)}
                                >
                                    <span className="data-value">{label}</span>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="inner-actions">
                        <Counter
                            onChange={(newValue) => setCounter(newValue)}
                            value={Number(counter)}
                        />

                        <Button onClick={() => handleAddElementToShoppingCart(product, counter, size)}>
                            В корзину
                        </Button>
                    </div>
                </div>
            </div>
        </StyledComponent>
    );
};

export default PageProductSectionHero;
