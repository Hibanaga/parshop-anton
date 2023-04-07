import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutAccordion: FunctionComponent<Props> = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <StyledComponent className="layout-accordion">
            {sections.map(({ label, value }, index) => (
                <div
                    key={index}
                    className="accordion-section"
                >
                    <button
                        className="accordion-button"
                        onClick={() => toggleSection(index)}
                    >
                        {label}
                    </button>
                    <div
                        className={classNames([
                            'accordion-content',
                            { active: activeIndex === index },
                        ])}
                    >
                        {value && Array.isArray(value) ? (
                            <ul>
                                {value.map(({ label, value }) => (
                                    <li
                                        key={value}
                                        className="list-item"
                                    ><span className="data-value">{label}</span></li>
                                ))}
                            </ul>
                        ) : <span className="data-value">{value}</span>}
                    </div>
                </div>
            ))}
        </StyledComponent>
    );
};

export default LayoutAccordion;
