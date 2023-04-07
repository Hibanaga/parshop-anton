import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    position: relative;
    
    &::after {
        content: "ABOUT US";
        font-size: 9.25em;
        position: absolute;
        bottom: -5%;
        left: -27.5%;
        z-index: 99;
        color: #777;
        opacity: .1;
        text-transform: uppercase;
    }
    
    .columns {
        display: flex;
        gap: .5em;
        
        .column-left {
            width: 50%;
            
            .headline {
                color: #da2f9a;
                text-transform: uppercase;
                font-size: 1.875em;
                font-weight: 500;
                padding-bottom: .75em;
                padding-top: 1.25em;
            }
            
            .description {
                .data-value {
                    padding-top: .5em;
                    display: block;
                    line-height: 155%;
                }
                
                .inner-author {
                    margin-top: 1.75em;
                    
                    .data-author {
                        text-align: right;
                        display: block;
                    }
                }
            }
        }
        .column-right {
            width: 50%;
            
            .inner-image {
                position: relative;
                min-height: 38em;
                width: 100%;
            }
        }
    }
    
   
    @media all and (max-width: ${variables.tabletS}) {
    }
`;

