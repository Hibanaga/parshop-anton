import React, { ChangeEvent, FunctionComponent } from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutCounter: FunctionComponent<Props> = ({  value, onChange }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (isNaN(parseInt(event.target.value))) return;
        onChange(parseInt(event.target.value));
    };

    const handlePlusAction = () => value && onChange(value + 1);
    const handleMinusAction = () => value && value > 1 && onChange(value - 1);

    return (
        <StyledComponent className="layout-counter">
            <button
                className="button"
                onClick={handleMinusAction}
            >
                <FontAwesomeIcon
                    className="icon"
                    icon={faMinus}
                />
            </button>
            <input
                className="input"
                value={value}
                min={1}
                onChange={handleChange}
            />
            <button
                className="button"
                onClick={handlePlusAction}
            >
                <FontAwesomeIcon
                    className="icon"
                    icon={faPlus}
                />
            </button>
        </StyledComponent>
    );
};

export default LayoutCounter;
