import Component from './component';

export interface Props {
    min: number;
    max: number;
    step: number;
    value: [number, number];
    onChange: (value: [number, number]) => void;
}

Component.defaultProps = {
};


export default Component;
