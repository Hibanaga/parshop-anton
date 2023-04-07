import { Option } from 'types/options';

import Component from './component';


export interface Props {
    sections: Option<string | Option<string>[] | null>[];
}

Component.defaultProps = {
};


export default Component;
