import React, { FunctionComponent } from 'react';

import ListElement from 'components/modules/Catalog/ListElement';

import { Props } from './index';
import StyledComponent from './styles';

const ModuleCatalogList: FunctionComponent<Props> = ({ products }) => {
    return (
        <StyledComponent className="module-catalog-list">
            {products.map((element) => (
                <ListElement
                    key={element.id}
                    product={element}
                />
            ))}
        </StyledComponent>
    );
};

export default ModuleCatalogList;
