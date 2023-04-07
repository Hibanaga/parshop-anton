import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    width: 100%;
    height: 100%;
    
    
    .inner-amount {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        .inner-price {
            color: #717171;
            
            .data-label {
                font-size: 1em;
                font-weight: 500;
            }
            .data-value {
                font-size: 1em;
                padding-left: .5em;
                color: #2d2a2a;
            }
        }

        .button-select-price {
            padding: .5em 1em;
            font-size: .925em;
            border: none;
            outline: none;
            background-color: #0f0f0f;
            color: #FFF;
            cursor: pointer;
            transition: 150ms;
            
            &:hover {
                background-color: #da2f9a;
            }
        }
    }
    
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
        max-height: 12.5em;
        padding: .25em .75em .25em 0;
        overflow: hidden;
        overflow-y: scroll;
        
        .list-item {
            
        }
    }
 
    @media all and (max-width: ${variables.tabletS}) {
    }
`;

