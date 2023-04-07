import { ReactNode } from 'react';

import Component from './component';

export interface Props {
    headline?: string;
    children?: ReactNode
}

Component.defaultProps = {
};


export default Component;
