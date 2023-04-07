import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    width: 100%;
    height: 100%;
    
    .layout-label-filter-container {
        padding-bottom: 2em;
        
        &:not(&:first-of-type) {
           margin-top: 2em;
        }
        
        &:not(&:last-of-type) {
            border-bottom: 0.01em solid rgba(129,129,129,.2);
        }
    }
    
    .list-colors {
        .list-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: .5em 0;
            cursor: pointer;
            
            .data-content {
                display: flex;
                align-items: center;
                
                .data-color {
                    width: 1.5em;
                    height: 1.5em;
                    border-radius: 50%;
                }
                .data-value {
                    padding-left: .65em;
                }   
            }
            
            &:hover {
                .inner-count {
                    background-color: #000;
                    
                    .data-count {
                        color: #FFF;
                    }
                }
            }
            
            .inner-count {
                width: 1.5em;
                height: 1em;
                position: relative;
                border: .01em solid #727272;
                border-radius: .375em;
                
                display: flex;
                justify-content: center;
                
                .data-count {
                    color: #727272;
                    font-size: .725em;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
 
    @media all and (max-width: ${variables.tabletS}) {
    }
`;

