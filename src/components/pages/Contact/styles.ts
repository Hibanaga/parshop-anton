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
        display: flex;
        justify-content: space-between;
        gap: 1em;
        
        .column {
            padding: 5em 0;
            
            .data-value {
                display: block;
                color: #000000;
                font-size: .825em;
                line-height: 150%;
            }
            
            
            &.column-certificate {
                position: relative;
                width: 28%;
                min-height: 16em;
            }
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

