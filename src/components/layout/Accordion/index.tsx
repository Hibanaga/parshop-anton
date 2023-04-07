import { Option } from 'types/options';

import Component from './component';


export interface Props {
    sections: {label: string, value: string, options?: Option<string>[]}[];
    onElementClick?: (globalKey: string, subKey?: string) => void;
}

Component.defaultProps = {
};


export default Component;
