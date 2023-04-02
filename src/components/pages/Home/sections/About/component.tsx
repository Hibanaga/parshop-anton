import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import { Props } from './index';
import StyledComponent from './styles';

const PageHomeSectionAbout: FunctionComponent<Props>  = ({  }) => {
    return (
        <StyledComponent className="page-home-section-about">
            <div className="columns">
                <div className="column-left">
                    <h2 className="headline">ДАВАЙТЕ ЗНАКОМИТЬСЯ!</h2>
                    <div className="description">
                        <span className="data-value">Меня зовут Алена, я мама 3-х озорных малышей, которые вдохновили меня на создание одежды PAR. В нашем магазине вы сможете купить стильную и комфортную одежду для себя и своих детей, а также подобрать идеальный family look.</span>
                        <span className="data-value">Выбирайте понравившиеся модели: удобные костюмы, стильные комбинезоны, базовые майки и лонгсливы, а мы доставим вам ваш заказ по Беларуси или России.</span>
                        <span className="data-value">PAR — одежда с хорошим вкусом.</span>

                        <div className="inner-author">
                            <span className="data-author">С наилучшими пожеланиями,</span>
                            <span className="data-author">Алена Кононович</span>
                        </div>
                    </div>
                </div>
                <div className="column-right">
                    <div className="inner-image">
                        <Image
                            fill
                            objectFit="cover"
                            src="https://parshop.by/wp-content/uploads/2022/10/IMG_4198-scaled.jpg"
                            alt="https://parshop.by/wp-content/uploads/2022/10/IMG_4198-scaled.jpg"
                        />
                    </div>
                </div>
            </div>
        </StyledComponent>
    );
};

export default PageHomeSectionAbout;
