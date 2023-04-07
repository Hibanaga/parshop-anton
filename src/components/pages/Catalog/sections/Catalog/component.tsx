import React, { FunctionComponent, useState } from 'react';

import Product from 'models/Product';

import List from 'components/modules/Catalog/List';

import { Props } from './index';
import StyledComponent from './styles';


const PageCatalogSectionCatalog: FunctionComponent<Props> = ({ }) => {
    const [products, setProducts] = useState<Product[] | null>(null);

    return (
        <StyledComponent className="page-catalog-section-catalog">
            <div className="inner-hero">

            </div>

            {products && <List products={products} />}

        </StyledComponent>
    );
};

export default PageCatalogSectionCatalog;
