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
    
    .inner-hero {
        margin-bottom: 1.5em;
        
        .tabs-list {
            display: flex;
            
            .list-item {
                position: relative;
                margin-left: .95em;
                
                &:not(&:first-of-type) {
                    padding-left: .375em;

                    &:after {
                        content: "/";
                        position: absolute;
                        left: -10%;
                    }
                }  
                
                &:not(&:last-of-type) {
                    &:hover {
                        .data-value {
                            opacity: .8;
                            cursor: pointer;
                        }
                    }
                }
                
                .data-value {
                    color: #8E8E8E;
                    font-size: .825em;
                    cursor: default;
                }
            }
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

