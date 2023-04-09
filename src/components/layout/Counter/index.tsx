import Component from './component';

export interface Props {
    value?: number;
    onChange: (value: number) => void;
}

Component.defaultProps = {
};

export default Component;
