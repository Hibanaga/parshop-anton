import React, { FunctionComponent } from 'react';

import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Banner from 'components/modules/Banner';

import { Props } from './index';
import StyledComponent from './styles';

const PageDelivery: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className="page-delivery">
            <Header />

            <Container className="container-delivery">
                <Banner headline="ДОСТАВКА И ОПЛАТА" />
            </Container>

            <Footer />
        </StyledComponent>
    );
};

export default PageDelivery;
