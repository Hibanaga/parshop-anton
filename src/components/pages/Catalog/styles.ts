import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    
    .columns {
        display: flex;
        min-height: 15em;
        
        .column-filter {
            height: 100%;
            width: 30%;
            margin: .5em;
        }
        .column-catalog {
            height: 100%;
            width: 70%;
            margin: .5em;
        }
    }
 
    @media all and (max-width: ${variables.tabletS}) {
    }
`;

