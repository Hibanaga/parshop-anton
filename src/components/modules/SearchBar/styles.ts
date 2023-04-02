import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    width: 100%;
    position: relative;
    z-index: 0;
    display: flex;
    border: 1px solid #F3F4F6;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border-radius: .375em;
    overflow: hidden;

    .layout-forms-simple-input {
        width: 100%;
        height: 100%;

        .input {
            border: none;
            box-shadow: none;
        }

    }

    .layout-form-simple-select {
        .multi-select-category__control {
            box-shadow: none;
            border: none;

            max-width: 15em;
        }
    }

    .button-submit {
        background-color: #FFF;
        border: none;
        outline: none;
        cursor: pointer;
        width: 6em;
        transition: 150ms;
        
        .icon {
            width: 1.75em;
        }

        &:hover {
            background-color: rgba(204, 204, 204, 0.4);
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

