import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    margin: 2em 0;
    
    .inner-image {
        position: relative;
        width: 100%;
    }

    .inner {
        display: flex;
        gap: .5em;
        
        .column-main {
            width: 50%;
            
            .inner-main {
                min-height: 32.5em;
            }
        }
        .column-additional {
            width: 50%;
            
            .inner-second {
                min-height: 16em;
            }
            
            .inner-additional {
                margin-top: .5em;
                display: flex;
                gap: .5em;
                
                .inner-third {
                    width: 60%;
                    min-height: 16em;
                }
                .inner-four {
                    width: 40%;
                    min-height: 16em;
                }
            }
        }
        
    }
    
    
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;

