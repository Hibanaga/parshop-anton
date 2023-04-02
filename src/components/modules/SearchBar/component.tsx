import React, { FunctionComponent } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/layout/Button';
import SimpleInput from 'components/layout/forms/SimpleInput';
import SimpleSelect from 'components/layout/forms/SimpleSelect';

import { Props } from './index';
import StyledComponent from './styles';

const ModuleSearchBar: FunctionComponent<Props>  = ({  }) => {
    return (
        <StyledComponent className="module-search-bar">
            <SimpleInput />
            <SimpleSelect
                placeholder="Выберите категорию"
                options={[]}
            />

            <button className="button-submit">
                <FontAwesomeIcon
                    className="icon"
                    icon={faMagnifyingGlass}
                />
            </button>
        </StyledComponent>
    );
};

export default ModuleSearchBar;
