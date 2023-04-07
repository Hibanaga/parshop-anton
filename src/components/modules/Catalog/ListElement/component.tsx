import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getSenteces } from '../../../../utils/string';

import { Props } from './index';
import StyledComponent from './styles';

const ModuleCatalogListElement: FunctionComponent<Props> = ({ product }) => {
    return (
        <StyledComponent className="module-catalog-list-element">
            <div className="inner-image">
                <Image
                    fill
                    objectFit="cover"
                    src={product?.imageUrl ?? '/images/placeholder.jpg'}
                    alt={product.id}
                />
            </div>
            <div className="inner-content">
                <span className="data-name">{product.name}</span>
                <span className="data-price">{product.priceDisplay}</span>


            </div>

            <div className="inner-additional">
                <span className="data-description">{product?.description && getSenteces(product?.description, 1)}</span>

                <div className="inner-actions">
                    <button className="button-show-details">
                        Выберите параметры
                    </button>

                    <FontAwesomeIcon
                        className="icon"
                        icon={faMagnifyingGlass}
                    />
                </div>
            </div>


        </StyledComponent>
    );
};

export default ModuleCatalogListElement;
