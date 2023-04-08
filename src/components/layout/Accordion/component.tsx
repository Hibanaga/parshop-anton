import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutAccordion: FunctionComponent<Props> = ({ sections, onElementClick }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <StyledComponent className="layout-accordion">
            {sections.map(({ label, value, options }, index) => (
                <div
                    key={index}
                    className="accordion-section"
                >
                    <button
                        className="accordion-button"
                        onClick={() => {
                            toggleSection(index);
                            !options && onElementClick && onElementClick(value);
                        }}
                    >
                        {label}
                    </button>
                    <div
                        className={classNames([
                            'accordion-content',
                            { active: activeIndex === index },
                        ])}
                    >
                        {options && Array.isArray(options) && (
                            <ul>
                                {options.map((element) => (
                                    <li
                                        key={element.value}
                                        className="list-item"
                                        onClick={() => onElementClick && onElementClick(value, element.value)}
                                    >
                                        <span className="data-value">{element.label}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </StyledComponent>
    );
};

export default LayoutAccordion;
