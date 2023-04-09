import Product from 'models/Product';

import Component from './component';

export interface Props {
    product: Product
}

Component.defaultProps = {
};

export default Component;
