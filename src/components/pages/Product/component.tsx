import React, { FunctionComponent, useState } from 'react';
import { InferGetServerSidePropsType } from 'next';

import Product from 'models/Product';

import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import SectionHero from 'components/pages/Product/sections/Hero';

import { getStaticStaticProps } from './index';
import StyledComponent from './styles';

const PageProduct: FunctionComponent<InferGetServerSidePropsType<typeof getStaticStaticProps>>  = ({ product }) => {
    return (
        <StyledComponent className="page-product">
            <Header />

            <Container>
                <SectionHero product={new Product(product)} />
            </Container>

            <Footer />
        </StyledComponent>
    );
};

export default PageProduct;
