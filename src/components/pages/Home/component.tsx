import React, { FunctionComponent, useEffect, useState } from 'react';
import { InferGetServerSidePropsType } from 'next';

import { getItem } from 'utils/localStorage';

import ButtonShoppingCart from 'components/layout/ButtonShoppingCart';
import Container from 'components/layout/Container';
import Header from 'components/layout/Header';

import SectionHero from './sections/Hero';
import { getStaticStaticProps } from './index';
import StyledComponent from './styles';

const PageHome: FunctionComponent<InferGetServerSidePropsType<typeof getStaticStaticProps>> = ({ }) => {
    return (
        <StyledComponent className="page-home">
            <Header />

            <Container>
                <SectionHero />
            </Container>
        </StyledComponent>
    );
};

export default PageHome;
