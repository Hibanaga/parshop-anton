import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import { Props } from './index';
import StyledComponent from './styles';

const PageProductSectionHero: FunctionComponent<Props> = ({ product }) => {
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
                                { label: 'M', value: 'm' },
                                { label: 'M', value: 'm' },
                            ].map(({ label, value }) => (
                                <li
                                    key={value}
                                    className="list-item"
                                >
                                    <span className="data-value">{label}</span>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="inner-actions">

                    </div>
                </div>
            </div>
        </StyledComponent>
    );
};

export default PageProductSectionHero;
