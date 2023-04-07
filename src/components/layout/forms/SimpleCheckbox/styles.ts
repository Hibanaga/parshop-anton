import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    .checkbox {
        display: flex;
        align-items: center;
        
        .label {
            padding-left: .25em;
            padding-top: .15em;
            font-size: 1em;
        }
    }
    
    .checkbox input[type="checkbox"] {
        appearance: none;
        width: 1.5em;
        height: 1.5em;
        border: .2em solid #2d2a2a;
        outline: none;
        border-radius: .375em;
        position: relative;
    }

    .checkbox input[type="checkbox"]:checked::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        background-color: #2d2a2a;
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

