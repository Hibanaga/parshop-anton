import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    position: relative;
    min-height: 20em;
    
    .inner-banner-content {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-85%, -50%);
        
        .headline {
            font-size: 2.5em;
            color: #2d2a2a;
            font-weight: 300;
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

