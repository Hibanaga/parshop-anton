import React, { FunctionComponent, useState } from 'react';

import Accordion from 'components/layout/Accordion';
import SimpleCheckbox from 'components/layout/forms/SimpleCheckbox';
import LabelFilterContainer from 'components/layout/LabelFilterContainer';
import RangeSlider from 'components/layout/RangeSlider';

import { Props } from './index';
import StyledComponent from './styles';

const PageCatalogSectionSidebar: FunctionComponent<Props> = ({ onChangeParams }) => {
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


            <LabelFilterContainer headline="По размеру">
                <SimpleCheckbox
                    label="Men"
                    isChecked={true}
                    onChange={(isChecked) => console.log('aaa')}
                />
                <SimpleCheckbox
                    label="Women"
                    isChecked={true}
                    onChange={(isChecked) => console.log('aaa')}
                />
                <SimpleCheckbox
                    label="Children"
                    isChecked={true}
                    onChange={(isChecked) => console.log('aaa')}
                />
            </LabelFilterContainer>

            <LabelFilterContainer headline="По цвету">
                <ul className="list-colors">
                    {
                        [
                            { label: 'Бежевый', value:'Бежевый', color: '#f0e8c4', count: 2 },
                            { label: 'Бордо', value:'Бордо', color: '#932020', count: 4 },
                            { label: 'Голубой', value:'Голубой', color: '#45accc', count: 6 },
                        ].map((element) => (
                            <li
                                key={element.value}
                                className="list-item"
                            >
                                <div className="data-content">
                                    {element?.color && (
                                        <div
                                            className="data-color"
                                            style={{ backgroundColor: element.color }}
                                        />
                                    )}
                                    <span className="data-value">{element.label}</span>
                                </div>

                                <div className="inner-count">
                                    <span className="data-count">{element.count}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </LabelFilterContainer>

        </StyledComponent>
    );
};

export default PageCatalogSectionSidebar;
