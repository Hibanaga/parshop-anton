import { Option } from 'types/options';

import Component from './component';

export interface Props {
    title: string;
    options: Option<string>[]
    onClick?: (newValue: Option<string>) => void;
}

Component.defaultProps = {
};

export default Component;
