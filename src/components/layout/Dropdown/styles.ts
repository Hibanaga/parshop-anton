import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    position: relative;
    max-width: 15em;
    
    &:hover {
        .list-dropdown {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .button-dropdown {
        &.style-primary.variant-primary {
            
            .button {
                width: 100%;
                background-color: #000;
                border-radius: 0;
                min-height: 3em;
                
                .button-content {
                    color: #FFF;
                    text-transform: uppercase;
                }
            }   
        }
    }
    
    .list-dropdown {
        color: #36363b;
        border: .01em solid #36363b;
        background-color: #fff;
        position: absolute;
        width: 100%;
        box-sizing: border-box;
        transition: 150ms;
        
        opacity: 0;
        transform: translateY(1em);
    }
    
    @media all and (max-width: ${variables.tabletL}) {
        
    }
`;
