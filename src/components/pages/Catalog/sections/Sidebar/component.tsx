import React, { FunctionComponent, useEffect, useState } from 'react';

import Accordion from 'components/layout/Accordion';
import SimpleCheckbox from 'components/layout/forms/SimpleCheckbox';
import LabelFilterContainer from 'components/layout/LabelFilterContainer';
import RangeSlider from 'components/layout/RangeSlider';
import ColorizedFilterElement from 'components/modules/Catalog/ColorizedFilterElement';

import { Props } from './index';
import StyledComponent from './styles';

const PageCatalogSectionSidebar: FunctionComponent<Props> = ({ params, onChangeParams }) => {
    const [filters, setFilters] = useState< { [key: string]: any }>({
        sizes: [],
        colors: [],
        min: 1,
        max: 156,
    });

    useEffect(() => {
        setFilters({
            ...filters,
            ...params,
            sizes: Array.isArray(params?.size) ? params?.size : params?.size ? [params?.size] : [],
            colors:  Array.isArray(params?.color) ? params?.color : params?.color ? [params?.color] : [],
            min: params?.minPrice ?? 1,
            max: params?.maxPrice ?? 156,
        });
    }, [JSON.stringify(params)]);

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
                    value={[ filters.min, filters.max ]}
                    onChange={(newValue) => {
                        const [minPrice, maxPrice] = newValue;

                        setFilters({
                            ...filters,
                            min: minPrice,
                            max: maxPrice,
                        });
                    }}
                />
                <div className="inner-amount">
                    <div className="inner-price">
                        <span className="data-label">Цена:</span>
                        <span className="data-value">{filters.min}BYN - {filters.max}BYN</span>
                    </div>
                    <button
                        className="button-select-price"
                        onClick={() => {
                            onChangeParams({
                                ...params,
                                minPrice: filters.min,
                                maxPrice: filters.max,
                            });
                        }}
                    >
                        Фильтровать
                    </button>
                </div>
            </LabelFilterContainer>

            <LabelFilterContainer headline="По размеру">
                {
                    [
                        { label: '116-122', value: '116-122' },
                        { label: '128-134', value: '128-134' },
                    ].map(({ label, value }) => (
                        <SimpleCheckbox
                            key={value}
                            label={label}
                            isChecked={!!filters.sizes.find((size: string) => size === value)}
                            onChange={() => {
                                const newValue = filters.sizes.find((size: string) => size === value) ?
                                    filters?.sizes?.filter((element: string) => element !== value) :
                                    [ ...filters.sizes, value];

                                onChangeParams({
                                    ...params,
                                    size: newValue,
                                });

                                setFilters({ ...filters, sizes: newValue });
                            }}
                        />
                    ))
                }
            </LabelFilterContainer>

            <LabelFilterContainer headline="По цвету">
                <ul className="list-colors">
                    {
                        [
                            { label: 'Бежевый', value:'first', color: '#f0e8c4', count: 2 },
                            { label: 'Бордо', value:'second', color: '#932020', count: 4 },
                            { label: 'Голубой', value:'third', color: '#45accc', count: 6 },
                        ].map((element) => (
                            <ColorizedFilterElement
                                key={element.value}
                                {...element}
                                active={!!filters.colors.find((size: string) => size === element.value)}
                                onClick={(newValue => {
                                    const newFormattedValue = filters.colors.find((color: string) => color === newValue) ?
                                        filters?.colors?.filter((color: string) => color !== newValue) :
                                        [ ...filters.colors, newValue];

                                    onChangeParams({
                                        ...params,
                                        color: newFormattedValue,
                                    });

                                    setFilters({ ...filters, colors: newFormattedValue });
                                })}
                            />
                        ))
                    }
                </ul>
            </LabelFilterContainer>

        </StyledComponent>
    );
};

export default PageCatalogSectionSidebar;
