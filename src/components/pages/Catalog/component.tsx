import React, { FunctionComponent } from 'react';

import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

import SectionCatalog from './sections/Catalog';
import SectionSidebar from './sections/Sidebar';
import { Props } from './index';
import StyledComponent from './styles';

const PageCatalog: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className="page-home">
            <Header />

            <Container>
                <div className="columns">
                    <aside className="column-filter">
                        <SectionSidebar />
                    </aside>
                    <main className="column-catalog">
                        <SectionCatalog />
                    </main>

                </div>
            </Container>

            <Footer />
        </StyledComponent>
    );
};

export default PageCatalog;
