import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    width: 100%;
    height: 100%;
    
    
    .module-catalog-list-element {
        &:nth-child(n + 1) {
            margin-bottom: -6.5em;
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

