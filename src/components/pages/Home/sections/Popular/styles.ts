import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    margin-bottom: 5em;
    
    .inner-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .category-title {
            color: #da2f9a;
            display: block;
            margin: 1em;
        }
        .title {
            font-size: 1.1em;
            margin: 1em;
            margin-top: 0;
        }
        
        .list-categories {
            display: flex;
            gap: .5em;
            
            .list-item {
                position: relative;
                cursor: pointer;
                
                &.active {
                    &:after {
                        content: "";
                        position: absolute;
                        height: .1em;
                        width: 100%;
                        background-color: #da2f9a;
                        bottom: 0;
                        left: 0;
                    }
                }
            }
            .data-value {}
        }
    }
    
    .popular-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em 2%;
        margin: 2em 0;
        
        .popular-list-element {
            .inner-image {
                position: relative;
                width: 100%;
                min-height: 24em;
            }   
            
            .inner-content {
                .data-name {
                    display: block;
                    padding-top: .235em;
                    font-size: .825em;
                }
                
                .data-price {
                    font-size: 1em;
                    font-weight: 500;
                    display: block;
                    padding: .2em 0;
                    text-transform: uppercase;
                }
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;

