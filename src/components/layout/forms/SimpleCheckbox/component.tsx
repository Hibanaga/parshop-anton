import React, { FunctionComponent, useState } from 'react';

import SimpleLabel from '../SimpleLabel';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutFormSimpleCheckbox: FunctionComponent<Props> = ({ label, isChecked, onChange }) => {
    const [checked, setChecked] = useState<boolean>(isChecked);

    const handleClick = () => {
        setChecked(!checked);
        onChange(!checked);
    };

    return (
        <StyledComponent className="layout-form-simple-checkbox">
            <div className="checkbox">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleClick}
                />
                {label && <SimpleLabel label={label} />}
            </div>
        </StyledComponent>
    );
};

export default LayoutFormSimpleCheckbox;
