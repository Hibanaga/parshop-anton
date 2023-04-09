import React, { FunctionComponent, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useAppContext } from 'context/AppContext';

import { ShoppingCartProps } from 'types/options';
import Routes from 'types/routes';

import { getItem } from 'utils/localStorage';

import Container from 'components/layout/Container';
import Dropdown from 'components/layout/Dropdown';
import SearchBar from 'components/modules/SearchBar';
import ShoppingCart from 'components/modules/ShoppingCart';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutHeader: FunctionComponent<Props> = ({  }) => {
    const router = useRouter();
    const [shoppingCartCounter, setShoppingCartCounter] = useState(0);
    const { shoppingCart, fetchShoppingCart } = useAppContext();
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    useEffect(() => {
        const products = getItem('shoppingCart');

        if (shoppingCart?.length === 0 && products) {
            fetchShoppingCart && fetchShoppingCart({});
        }
    }, []);

    useEffect(() => {
        const shoppingCart = getItem('shoppingCart');

        if (shoppingCart) {
            const parseShoppingCart = JSON.parse(shoppingCart);
            const result = parseShoppingCart.reduce((prev: number, { quantity }: ShoppingCartProps) => prev +=quantity, 0);
            setShoppingCartCounter(result);
        }
    }, [JSON.stringify(getItem('shoppingCart'))]);

    return (
        <StyledComponent className={classNames(['layout-header'])}>
            <ShoppingCart
                isOpen={isOpenDrawer}
                onOpen={()=> setIsOpenDrawer(true)}
                onDrop={()=> setIsOpenDrawer(false)}
            />

            <Container>
                <div className="inner">
                    <div
                        className="inner-image"
                        onClick={() => {
                            router.push(Routes.Home);
                        }}
                    >
                        <Image
                            fill
                            objectFit="contain"
                            src="/images/logo.png"
                            alt="alt image logo"
                        />
                    </div>

                    <div className="inner-searchbar">
                        <SearchBar />
                    </div>

                    <div className="inner-shopping-cart" >
                        <div
                            className="icon-button"
                            onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                        >
                            {shoppingCartCounter && (
                                <div className="inner-counter">
                                    <span className="data-value">{shoppingCartCounter}</span>
                                </div>
                            )}

                            <FontAwesomeIcon
                                className="icon"
                                icon={faBagShopping}
                            />
                        </div>

                        <span className="data-total">0 BYN</span>
                    </div>
                </div>
            </Container>

            <div className="hero-navigation">
                <Container>
                    <div className="inner-row">
                        <div className="inner-navigation">
                            <Dropdown
                                title="Категории"
                                options={[
                                    { label: 'Gifts', value: 'gifts' },
                                    { label: 'Kids', value: 'kids' },
                                    { label: 'Men', value: 'men' },
                                    { label: 'Women', value: 'women' },
                                ]}
                                onClick={(newValue) => {
                                    router.push({
                                        pathname: Routes.CatalogCategory,
                                        query: { slug: newValue.value },
                                    });
                                }}
                            />

                            <ul className="list-navigation">
                                {[
                                    { label: 'Доставка и оплата', value: Routes.Delivery },
                                    { label: 'Возврат', value: Routes.Refund },
                                    { label: 'Отзывы', value: Routes.Reviews },
                                    { label: 'Контакты', value: Routes.Contact },
                                ].map((element) => (
                                    <li
                                        key={element.value}
                                        className="list-item"
                                        onClick={() => router.push(element.value)}
                                    >
                                        <span className="data-value">{element.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="inner-contact">
                            <ul className="list-contact">
                                {[
                                    { label: 'СКИДКИ', value: 'Доставка и оплата' },
                                    { label: 'МЫ В INSTAGRAM', value: 'Возврат' },
                                ].map((element) => (
                                    <li
                                        key={element.value}
                                        className="list-item"
                                    >
                                        <span className="data-value">{element.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </Container>
            </div>
        </StyledComponent>
    );
};

export default LayoutHeader;
