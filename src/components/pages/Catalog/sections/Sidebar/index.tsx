import Component from './component';

export interface Props {
    params: { [key: string]: any }
    onChangeParams: (newValue: Record<string, any>) => void;
}

Component.defaultProps = {
};


export default Component;
