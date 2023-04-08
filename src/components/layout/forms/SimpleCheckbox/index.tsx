import Component from './component';

export interface Props {
    label: string;
    isChecked: boolean;
    onChange: (isChecked: boolean) => void;
}

Component.defaultProps = {
};


export default Component;
