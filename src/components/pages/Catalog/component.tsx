import React, { FunctionComponent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { convertObjectValues } from 'utils/array';

import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

import SectionCatalog from './sections/Catalog';
import SectionSidebar from './sections/Sidebar';
import { Props } from './index';
import StyledComponent from './styles';

const initialParams = {};


const getParams = (
    routerQuery: any,
    initialParams: any = {},
    overrideParams: any = {},
): any => {
    //Get router params based on initialParams
    const routerParams: Record<string, any> = {};
    Object.keys(initialParams || {}).forEach(initialParamKey => {
        if (routerQuery[initialParamKey]) {
            routerParams[initialParamKey] = routerQuery[initialParamKey];
        }
    });
    return {
        ...(initialParams || {}),
        ...routerParams,
        ...(overrideParams || {}),
    };
};

const PageCatalog: FunctionComponent<Props> = ({ }) => {
    const router = useRouter();
    const initParams = getParams(router?.query, initialParams, {  });
    const [params, setParams] = useState(initParams);

    useEffect(() => {
        setParams({
            ...convertObjectValues(params),
            ...getParams(router?.query, initialParams),
        });
    }, [JSON.stringify({ ...router?.query })]);

    const onChangeParams = (nextParams: Record<string, any>) => {
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                ...nextParams,
            },
        });
    };

    return (
        <StyledComponent className="page-home">
            <Header />

            <Container>
                <div className="columns">
                    <aside className="column-filter">
                        <SectionSidebar
                            params={params}
                            onChangeParams={onChangeParams}
                        />
                    </aside>
                    <main className="column-catalog">
                        <SectionCatalog
                            params={params}
                            onChangeParams={onChangeParams}
                        />
                    </main>
                </div>
            </Container>

            <Footer />
        </StyledComponent>
    );
};

export default PageCatalog;
