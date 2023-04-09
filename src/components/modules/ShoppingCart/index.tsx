import Component from './component';

export interface Props {
    isOpen: boolean;
    onOpen: () => void;
    onDrop: () => void;
}

Component.defaultProps = {
};

export default Component;
