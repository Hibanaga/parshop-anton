import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.footer`
    margin-top: 5em;
    
    .columns {
        display: flex;
        gap: .5em;
        
        .column-logo {
            width: 40%;
            
            .inner-image {
                position: relative;
                width: 50%;
                min-height: 7em;
            }
        }
        .column-details {
            width: 60%;
            display: flex;
            gap: .5em;
            
            .inner-categories {
                width: 50%;
                
                .data-headline {
                    color: #2d2a2a;
                    font-weight: 500;
                    margin-bottom: 1em;
                    
                    &:last-of-type {
                        margin-top: 1em;
                    }
                }

                .list-categories {
                    .list-element {
                        padding: .25em .25em .25em 0;
                        .data-value {}
                    }
                    
                    padding-bottom: 1em;
                    border-bottom: .01em solid rgba(232, 232, 232, 1);
                }
            }
            
            .inner-information {
                width: 50%;
                
                .data-email {
                    display: block;
                    padding-bottom: .5em;
                }
                .data-phone {
                    display: block;
                }
                
                .data-value {
                    display: block;
                    line-height: 155%;
                    padding-top: 1em;
                }
            }
        }
    }
   
    @media all and (max-width: ${variables.tabletL}) {
        
    }
`;
