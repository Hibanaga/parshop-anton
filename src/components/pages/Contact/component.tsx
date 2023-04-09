import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Banner from 'components/modules/Banner';

import { Props } from './index';
import StyledComponent from './styles';

const PageContact: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className="page-contact">
            <Header />

            <Container className="container-info">
                <Banner headline="КОНТАКТЫ" />

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

                <div className="inner-image">
                    <Image
                        fill
                        objectFit="cover"
                        src="https://parshop.by/wp-content/uploads/2022/06/ASAM9236-scaled.jpg?id=7460"
                        alt="random"
                    />
                </div>
                <div className="columns">
                    <ul className="column">
                        {
                            [
                                { label: 'Договор оферты', href:'https://parshop.by/wp-content/uploads/2023/04/%D0%9E%D0%91%D0%A0%D0%90%D0%91%D0%9E%D0%A2%D0%9A%D0%90-%D0%9F%D0%95%D0%A0%D0%A1%D0%9E%D0%9D%D0%90%D0%9B%D0%AC%D0%9D%D0%AB%D0%A5-%D0%94%D0%90%D0%9D%D0%9D%D0%AB%D0%A5.pdf' },
                                { label: 'Обработка персональных данных', href:'https://parshop.by/wp-content/uploads/2023/04/%D0%9E%D0%91%D0%A0%D0%90%D0%91%D0%9E%D0%A2%D0%9A%D0%90-%D0%9F%D0%95%D0%A0%D0%A1%D0%9E%D0%9D%D0%90%D0%9B%D0%AC%D0%9D%D0%AB%D0%A5-%D0%94%D0%90%D0%9D%D0%9D%D0%AB%D0%A5.pdf' },
                                { label: 'Правила клубной программы', href:'https://parshop.by/wp-content/uploads/2023/04/%D0%9E%D0%91%D0%A0%D0%90%D0%91%D0%9E%D0%A2%D0%9A%D0%90-%D0%9F%D0%95%D0%A0%D0%A1%D0%9E%D0%9D%D0%90%D0%9B%D0%AC%D0%9D%D0%AB%D0%A5-%D0%94%D0%90%D0%9D%D0%9D%D0%AB%D0%A5.pdf' },
                            ].map((element) => (
                                <Link
                                    key={element.href}
                                    href={element.href}
                                >
                                    <li className="list-item">
                                        <span className="data-value">{element.label}</span>
                                    </li>
                                </Link>
                            ))
                        }

                    </ul>
                    <div className="column column-certificate">
                        <Image
                            fill
                            objectFit="contain"
                            src="https://parshop.by/wp-content/uploads/2022/06/2020-08-28-22.23.25-400x534.jpg.webp"
                            alt="random"
                        />
                    </div>
                </div>
            </Container>

            <Footer />
        </StyledComponent>
    );
};

export default PageContact;
