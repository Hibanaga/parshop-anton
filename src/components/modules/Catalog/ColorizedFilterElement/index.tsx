import Component from './component';

export interface Props {
    label: string;
    value: string;
    color: string;
    count: number;
    active?: boolean;
    onClick?: (newValue: string) => void;
}

Component.defaultProps = {
};


export default Component;
