import React, { FunctionComponent, useEffect, useState } from 'react';
import { InferGetServerSidePropsType } from 'next';

import { getItem } from 'utils/localStorage';

import ButtonShoppingCart from 'components/layout/ButtonShoppingCart';
import Container from 'components/layout/Container';
import Header from 'components/layout/Header';

import { getStaticStaticProps } from './index';
import StyledComponent from './styles';

const PageHome: FunctionComponent<InferGetServerSidePropsType<typeof getStaticStaticProps>> = ({ categories }) => {

    return (
        <StyledComponent className="page-home">

        </StyledComponent>
    );
};

export default PageHome;
