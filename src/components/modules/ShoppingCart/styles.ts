import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    
    .inner-drawer {
        color: #000;
        height: 100%;
        position: relative;
        
        .inner-hero {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.25em 1em;
            border-bottom: .01em solid #000;
           
            
            .inner-close {
                display: flex;
                align-items: center;
                cursor: pointer;
                
                .icon {
                    width: 1em;
                    height: 1em;
                }
            }
        }
        
        .inner-actions {
            margin-top: auto;
            padding: .5em 1em;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            box-sizing: border-box;
            border-top: .01em solid #000;
            
            .inner-result {
                display: flex;
                justify-content: space-between;
                margin-bottom: 1em;
            }
            
            .button-show-shopping-cart {
               margin-bottom: 1em;
               
                
                .button {
                    width: 100%;
                    border-radius: .125em;
                  
                    color: #FFF;
                    background-color:  #000;
                }
            }
            .button-make-order {
               
                .button {
                    width: 100%;
                    border-radius: .125em;

                    color: #FFF;
                    background-color:  #000;
                }
            }
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

