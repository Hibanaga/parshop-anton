import React, { FunctionComponent } from 'react';

import { Props } from './index';
import StyledComponent from './styles';

const LabelFilterContainer: FunctionComponent<Props> = ({ headline, children }) => {
    return (
        <StyledComponent className="layout-label-filter-container">
            {headline && <h3 className="headline">{headline}</h3>}

            { children && (
                <div className="inner-children">
                    {children}
                </div>
            )}
        </StyledComponent>
    );
};

export default LabelFilterContainer;
