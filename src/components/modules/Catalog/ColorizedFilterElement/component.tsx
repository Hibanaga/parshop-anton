import React, { FunctionComponent } from 'react';
import { faBagShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { Props } from './index';
import StyledComponent from './styles';

const ModuleCatalogColorizedFilterElement: FunctionComponent<Props> = ({ color, label, value, count, active, onClick }) => {
    return (
        <StyledComponent className={classNames(['module-catalog-colorized-list-element', { active }])}>
            <div className="data-content">
                {color && (
                    <div
                        className="data-color"
                        style={{ backgroundColor: color }}
                    />
                )}
                <span className="data-value">{label}</span>
                {active && (
                    <FontAwesomeIcon
                        className="icon"
                        icon={faXmark}
                    />
                )}
            </div>

            <div className="inner-count">
                <span className="data-count">{count}</span>
            </div>
        </StyledComponent>
    );
};

export default ModuleCatalogColorizedFilterElement;
