import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    margin-top: 3em;
    
    .columns {
        display: flex;
        gap: 2em;
        
        .column-image {
            display: flex;
            gap: .5em;
            width: 35%;
            
            .side-images {
                width: 20%;
                
                .inner-side-image {
                    
                    &:not(&:first-of-type) {
                        margin-top: 1em;
                    }
                  
                    position: relative;
                    min-height: 6em;
                }
            }
            .cover-image {
                width: 80%;
                min-height: 23em;
                position: relative;
            }
        }
        
        .column-info {
            width: 65%;
            
            .data-price {
                display: block;
            }
            
            .data-description {
                display: block;
            }

            .list-sizes {
                display: flex;
                margin-top: 1em;
                
                .list-item {
                    padding: .375em .5em;
                    margin-right: .75em;
                    background-color: #FFF;
                    box-shadow: inset 0 0 0 1px #ddd;
                    
                    &:hover {
                        background-color: #000;
                    }
                    
                    .data-value {
                       
                    }   
                }
                
            }
        }
    }
    

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

