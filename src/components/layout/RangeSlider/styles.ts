import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    input[type='range'] {
        -webkit-appearance: none;
        width: 100%;
    }
    
    
    .range-container {
        position: relative;
        width: 100%;
        height: 1em;
        margin-top: 1.25em;
    }
    
    .range-track {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: .1em;
        background-color: #ddd;
    }
    .range-thumb {
        position: absolute;
        top: -50%;
        left: 0;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background-color: #fff;
        border: 1px solid #ddd;
        cursor: grab;

        &:hover {
            border-color: #666;
        }

        &:active {
            cursor: grabbing;
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;

