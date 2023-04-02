import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    
    .columns {
        display: flex;
        gap: .5em;
        
        .column-left {
            width: 50%;
            
            .headline {}
            .description {
                .data-value {}
                
                .inner-author {
                    .data-author {}
                }
            }
        }
        .column-right {
            width: 50%;
            
            .inner-image {
                position: relative;
                min-height: 42em;
                width: 100%;
            }
        }
    }
   
    @media all and (max-width: ${variables.tabletS}) {
    }
`;

