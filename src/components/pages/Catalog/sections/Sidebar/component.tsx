import React, { FunctionComponent, useState } from 'react';

import Accordion from 'components/layout/Accordion';
import LabelFilterContainer from 'components/layout/LabelFilterContainer';
import RangeSlider from 'components/layout/RangeSlider';

import { Props } from './index';
import StyledComponent from './styles';

const PageCatalogSectionSidebar: FunctionComponent<Props> = ({ }) => {
    const [rangeSelect, setRangeSelect] = useState<[number, number]>([1, 156]);

    return (
        <StyledComponent className="page-catalog-section-side-bar">
            <LabelFilterContainer headline="Категории">
                <Accordion sections={[
                    { label: 'Gifts', value: [
                        { label: 'Водолазки', value: 'Водолазки' },
                        { label: 'Костюмы', value: 'Костюмы' },
                        { label: 'Свитшоты', value: 'Свитшоты' },
                        { label: 'Футболки', value:'Футболки' },
                    ] },
                    { label: 'Kids', value: [
                        { label: 'Водолазки', value: 'Водолазки' },
                        { label: 'Костюмы', value: 'Костюмы' },
                        { label: 'Свитшоты', value: 'Свитшоты' },
                        { label: 'Футболки', value:'Футболки' },
                    ] },
                    { label: 'Men', value: null },
                    { label: 'Women', value: null },
                ]}
                />
            </LabelFilterContainer>

            <LabelFilterContainer headline="По цене">
                <RangeSlider
                    min={1}
                    max={156}
                    step={1}
                    value={rangeSelect}
                    onChange={(newValue) =>  setRangeSelect(newValue)}
                />
            </LabelFilterContainer>


        </StyledComponent>
    );
};

export default PageCatalogSectionSidebar;
