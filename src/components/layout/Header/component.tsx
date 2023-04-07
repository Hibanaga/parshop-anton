import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import Container from 'components/layout/Container';
import Dropdown from 'components/layout/Dropdown';
import SearchBar from 'components/modules/SearchBar';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutHeader: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent className={classNames(['layout-header'])}>
            <Container>
                <div className="inner">
                    <div className="inner-image">
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

                    <div className="inner-shopping-cart">
                        <div className="icon-button">
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
                                title="выберите категорию"
                                options={[
                                    { label: 'Option 1', value: 'option-1' },
                                    { label: 'Option 2', value: 'option-2' },
                                    { label: 'Option 3', value: 'option-3' },
                                ]}
                            />

                            <ul className="list-navigation">
                                {[
                                    { label: 'Доставка и оплата', value: 'Доставка и оплата' },
                                    { label: 'Возврат', value: 'Возврат' },
                                    { label: 'Отзывы', value: 'Отзывы' },
                                    { label: 'Контакты', value: 'Контакты' },
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
