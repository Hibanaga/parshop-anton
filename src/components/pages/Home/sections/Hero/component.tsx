import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import Routes from 'types/routes';

import { Props } from './index';
import StyledComponent from './styles';

const PageHomeSectionHero: FunctionComponent<Props>  = ({  }) => {
    const router = useRouter();

    return (
        <StyledComponent className="page-home-section-hero">
            <div className="inner">
                <div className="column-main">
                    <div
                        className={classNames(['inner-image', 'inner-main'])}
                        onClick={()=> {
                            router.push({
                                pathname: Routes.CatalogCategory,
                                query: { slug: 'women' },
                            });
                        }}
                    >
                        <Image
                            fill
                            objectFit="cover"
                            src="https://parshop.by/wp-content/uploads/2023/03/128-2-800x800.jpg"
                            alt="https://parshop.by/wp-content/uploads/2023/03/128-2-800x800.jpg"
                        />

                        <div className="inner-content">
                            <h1 className="headline">
                                — WOMEN
                            </h1>

                            <span className="span-hint">перейти</span>
                        </div>
                    </div>
                </div>

                <div className="column-additional">
                    <div
                        className={classNames(['inner-image', 'inner-second'])}
                        onClick={()=> {
                            router.push({
                                pathname: Routes.CatalogCategory,
                                query: { slug: 'men' },
                            });
                        }}
                    >
                        <Image
                            fill
                            objectFit="cover"
                            src="https://parshop.by/wp-content/uploads/2023/03/ASAM9685-1-1000x480.jpg"
                            alt="https://parshop.by/wp-content/uploads/2023/03/ASAM9685-1-1000x480.jpg"
                        />

                        <div className="inner-content">
                            <h1 className="headline">
                                — MEN
                            </h1>

                            <span className="span-hint">перейти</span>
                        </div>
                    </div>

                    <div className="inner-additional">
                        <div
                            className={classNames(['inner-image', 'inner-third'])}
                            onClick={()=> {
                                router.push({
                                    pathname: Routes.CatalogCategory,
                                    query: { slug: 'kids' },
                                });
                            }}
                        >
                            <Image
                                fill
                                objectFit="cover"
                                src="https://parshop.by/wp-content/uploads/2022/10/Kids-666x570.jpg"
                                alt="https://parshop.by/wp-content/uploads/2022/10/Kids-666x570.jpg"
                            />

                            <div className="inner-content">
                                <h1 className="headline">
                                    — KIDS
                                </h1>

                                <span className="span-hint">перейти</span>
                            </div>
                        </div>

                        <div
                            className={classNames(['inner-image', 'inner-four'])}
                            onClick={()=> {
                                router.push({
                                    pathname: Routes.CatalogCategory,
                                    query: { slug: 'sale' },
                                });
                            }}
                        >
                            <Image
                                fill
                                objectFit="cover"
                                src="https://parshop.by/wp-content/uploads/2022/10/IMG_4313-464x570.jpg"
                                alt="https://parshop.by/wp-content/uploads/2022/10/IMG_4313-464x570.jpg"
                            />

                            <div className="inner-content">
                                <h1 className="headline headline-sale">
                                    SALE
                                </h1>

                                <span className="span-hint">перейти</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledComponent>
    );
};

export default PageHomeSectionHero;
