import { GetServerSideProps } from 'next';

import Component from './component';

export interface Props {
}

Component.defaultProps = {
};

export const getStaticStaticProps: GetServerSideProps = async () => {
    try {
        return {
            props: {},
        };
    } catch (error) {
        console.error(error);
        return {
            props: {},
        };
    }
};

export default Component;
