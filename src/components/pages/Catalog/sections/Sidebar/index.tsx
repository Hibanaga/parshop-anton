import Component from './component';

export interface Props {
    onChangeParams: (newValue: Record<string, any>) => void;
}

Component.defaultProps = {
};


export default Component;
