import { Option } from 'types/options';

import Component from './component';

export interface Props {
    title: string;
    options: Option<string>[]
}

Component.defaultProps = {
};

export default Component;
