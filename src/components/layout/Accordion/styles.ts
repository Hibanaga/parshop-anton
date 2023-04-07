import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    width: 100%;

    .accordion-section {
        margin-bottom: .825em;
        overflow: hidden;
    }

    .accordion-button {
        background-color: #ccc;
        padding: .75em;
        width: 100%;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .accordion-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }

    .active {
        max-height: 12.5em;
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;

