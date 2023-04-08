import React, { FunctionComponent } from 'react';

import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Banner from 'components/modules/Banner';

import { Props } from './index';
import StyledComponent from './styles';

const PageRefund: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className="page-refund">
            <Header />

            <Container className="container-info">
                <Banner headline="ВОЗВРАТ" />

                <div className="columns">
                    <div className="column">
                        <span className="data-value">— После нажатия кнопки «Подтвердить заказ» вы перейдете на специальную защищенную платежную страницу процессинговой системы bePaid </span>
                        <span className="data-value">— После нажатия кнопки «Подтвердить заказ» вы перейдете на специальную защищенную платежную страницу процессинговой системы bePaid </span>
                        <span className="data-value">— После нажатия кнопки «Подтвердить заказ» вы перейдете на специальную защищенную платежную страницу процессинговой системы bePaid </span>
                        <span className="data-value">— После нажатия кнопки «Подтвердить заказ» вы перейдете на специальную защищенную платежную страницу процессинговой системы bePaid </span>
                    </div>
                    <div className="column">
                        <span className="data-value">— После нажатия кнопки «Подтвердить заказ» вы перейдете на специальную защищенную платежную страницу процессинговой системы bePaid </span>
                        <span className="data-value">— После нажатия кнопки «Подтвердить заказ» вы перейдете на специальную защищенную платежную страницу процессинговой системы bePaid </span>
                        <span className="data-value">— После нажатия кнопки «Подтвердить заказ» вы перейдете на специальную защищенную платежную страницу процессинговой системы bePaid </span>
                        <span className="data-value">— После нажатия кнопки «Подтвердить заказ» вы перейдете на специальную защищенную платежную страницу процессинговой системы bePaid </span>
                    </div>
                </div>
            </Container>

            <Footer />
        </StyledComponent>
    );
};

export default PageRefund;
