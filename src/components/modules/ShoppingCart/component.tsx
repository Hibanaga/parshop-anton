import React, { FunctionComponent } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Backdrop from 'components/layout/Backdrop';
import Button from 'components/layout/Button';
import Drawer from 'components/layout/Drawer';

import { Props } from './index';
import StyledComponent from './styles';

const ModuleShoppingCart: FunctionComponent<Props>  = ({ isOpen, onDrop, onOpen }) => {
    return (
        <StyledComponent className="module-shopping-cart">
            <Backdrop
                isOpen={isOpen}
                onDrop={onDrop}
            />
            <Drawer isOpen={isOpen}>
                <div className="inner-drawer">
                    <div className="inner-hero">
                        <h2 className="headline">
                            Корзина
                        </h2>

                        <div
                            className="inner-close"
                            onClick={onDrop}
                        >
                            <span className="data-close-description">
                                закрыть
                            </span>
                            <FontAwesomeIcon
                                className="icon"
                                icon={faXmark}
                            />
                        </div>
                    </div>


                    <div className="inner-actions">
                        <div className="inner-result">
                            <span className="data-label">Подытог:</span>
                            <span className="data-value">123 BYN</span>
                        </div>

                        <Button className="button-show-shopping-cart">Просмотр корзины</Button>
                        <Button className="button-make-order">Оформление заказа</Button>
                    </div>
                </div>
            </Drawer>

        </StyledComponent>
    );
};

export default ModuleShoppingCart;
