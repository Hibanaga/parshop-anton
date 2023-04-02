import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Container from 'components/layout/Container';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutFooter: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent className={classNames(['layout-footer'])}>
            <Container>
                <div className="columns">
                    <div className="column-logo">
                        <div className="inner-image">
                            <Image
                                fill
                                objectFit="contain"
                                src="/images/logo.png"
                                alt="alt image logo"
                            />
                        </div>
                    </div>
                    <div className="column-details">
                        <div className="inner-categories">
                            <h3 className="data-headline">КАТЕГОРИИ</h3>
                            <ul className="list-categories">
                                {
                                    [
                                        { label: 'Женщинам', value: 'women' },
                                        { label: 'Мужчинам', value: 'men' },
                                        { label: 'Детям', value: 'children' },
                                        { label: 'SALE', value: 'sale' },
                                        { label: 'Gifts', value: 'Gifts' },
                                    ].map((element) => (
                                        <div
                                            key={element.value}
                                            className="list-element"
                                        >
                                            <span className="data-value">{element.label}</span>
                                        </div>
                                    ))
                                }
                            </ul>

                            <h3 className="data-headline">МЫ В INSTAGRAM</h3>
                        </div>
                        <div className="inner-information">
                            <span
                                className="data-email"
                                dangerouslySetInnerHTML={{ __html: '+37544 576 46 42' }}
                            />
                            <span
                                className="data-phone"
                                dangerouslySetInnerHTML={{ __html: 'parshop.info@gmail.com' }}
                            />
                            {[
                                '<span class="bolder">Наш магазин в оффлайне:<span/> Беларусь, Минск, ул.Притыцкого, 156, ТЦ Green City, 2 этаж. Оплата банковскими картами или наличными.',
                                '<span class="bolder">Наш магазин представлен в Канцепт Краме:<span/> Беларусь, Минск, ул.Немига, 5, ТЦ Метрополь, 3 этаж. Ежедневно, 10:00-21:00. Оплата банковскими картами или наличными.',
                                '<span class="bolder">Беларусь, Минск, ул.Тимирязева, 74А, ТРЦ Palazzo, 2 этаж.<span/> Ежедневно, 10:00-22:00. Оплата банковскими картами или наличными.',
                            ].map((element) => (
                                <span
                                    key={element}
                                    className="data-value"
                                    dangerouslySetInnerHTML={{  __html: element }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </StyledComponent>
    );
};

export default LayoutFooter;
