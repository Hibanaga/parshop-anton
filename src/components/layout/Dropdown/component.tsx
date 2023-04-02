import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import Button from '../Button';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutDropdown: FunctionComponent<Props> = ({ title, options }) => {
    return (
        <StyledComponent className={classNames(['layout-dropdown'])}>
            <Button className="button-dropdown">{title}</Button>

            <ul className="list-dropdown">
                {options.map((element) => (
                    <li
                        key={element.value}
                        className="list-item"
                    >
                        <span className="data-value">{element.label}</span>
                    </li>
                ))}
            </ul>
        </StyledComponent>
    );
};

export default LayoutDropdown;
