import Component from './component';

export interface Props {
    headline: string;
    imageUrl?: string
}

Component.defaultProps = {
    imageUrl: 'https://parshop.by/wp-content/uploads/2022/06/ASAM9236-scaled.jpg?id=7460',
};

export default Component;
