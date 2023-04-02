import React, { FunctionComponent } from 'react';
import { InferGetServerSidePropsType } from 'next';

import Container from 'components/layout/Container';
import Header from 'components/layout/Header';
import SectionAbout from 'components/pages/Home/sections/About';
import SectionHero from 'components/pages/Home/sections/Hero';
import SectionPopular from 'components/pages/Home/sections/Popular';

import { getStaticStaticProps } from './index';
import StyledComponent from './styles';

const PageHome: FunctionComponent<InferGetServerSidePropsType<typeof getStaticStaticProps>> = ({ }) => {
    return (
        <StyledComponent className="page-home">
            <Header />

            <Container>
                <SectionHero />
                <SectionPopular />
                <SectionAbout />
            </Container>
        </StyledComponent>
    );
};

export default PageHome;
