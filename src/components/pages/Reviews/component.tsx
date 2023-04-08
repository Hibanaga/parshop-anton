import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Banner from 'components/modules/Banner';

import { Props } from './index';
import StyledComponent from './styles';

const PageReviews: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className="page-reviews">
            <Header />

            <Container className="container-info">
                <Banner headline="ВОЗВРАТ" />

                <div className="columns">
                    {
                        [
                            'https://parshop.by/wp-content/uploads/2022/07/5-400x561-1.png',
                            'https://parshop.by/wp-content/uploads/2022/07/5-400x561-1.png',
                            'https://parshop.by/wp-content/uploads/2022/07/5-400x561-1.png',
                            'https://parshop.by/wp-content/uploads/2022/07/5-400x561-1.png',
                            'https://parshop.by/wp-content/uploads/2022/07/5-400x561-1.png',
                            'https://parshop.by/wp-content/uploads/2022/07/5-400x561-1.png',
                            'https://parshop.by/wp-content/uploads/2022/07/5-400x561-1.png',
                        ].map((imageUrl, idx) => (
                            <div
                                key={idx}
                                className="column-image"
                            >
                                <Image
                                    fill
                                    objectFit="contain"
                                    src={imageUrl}
                                    alt={imageUrl}
                                />
                            </div>
                        ))
                    }


                </div>
            </Container>

            <Footer />
        </StyledComponent>
    );
};

export default PageReviews;
