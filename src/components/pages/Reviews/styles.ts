import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    
    .container-info {
        padding: 2em 0;
    }

    .inner-image {
        min-height: 5em;
        position: relative;
    }
    
    .columns {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1em;
        margin: 2em 0;
        
        .column-image {
            min-height: 22em;
            position: relative;
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

