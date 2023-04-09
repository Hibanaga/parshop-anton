import React, { FunctionComponent } from 'react';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import Button from '../Button';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutDropdown: FunctionComponent<Props> = ({ title, options, onClick }) => {
    return (
        <StyledComponent className={classNames(['layout-dropdown'])}>
            <Button className="button-dropdown">
                <div className="inner-description">
                    <FontAwesomeIcon
                        className="icon"
                        icon={faBars}
                    />
                    <span className="data-label">{title}</span>
                </div>

                <FontAwesomeIcon
                    className="icon"
                    icon={faChevronDown}
                />
            </Button>

            <ul className="list-dropdown">
                {options.map((element) => (
                    <li
                        onClick={() => onClick && onClick(element)}
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
