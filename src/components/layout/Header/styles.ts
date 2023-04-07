import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.header`
    
    .inner {
        display: flex;
        align-items: center;
        gap: 1.5em;
        
        .inner-image {
            position: relative;
            width: 15%;
            height: 6.5em;
        }
        
        
        .inner-searchbar {
            width: 75%;
        }
        
        
        .inner-shopping-cart {
            width: 10%;
            display: flex;
            align-items: center;
            
            .icon-button {
                border-radius: 50%;
                position: relative;
                
                width: 2em;
                height: 2em;
                
                &:hover {
                    background-color: rgba(204, 204, 204, 0.4);
                }
                
                .icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    font-size: .525em;
                    transform: translate(-50%, -50%);
                }
            }
            
            .data-total {
                display: block;
                margin-left: .5em;
                font-weight: 300;
                font-size: .825em;
                white-space: nowrap;
            }
        }
    }
    
    
    .hero-navigation {
        border-top: 0.01em solid rgba(232, 232, 232, 1);
        border-bottom: 0.01em solid rgba(232, 232, 232, 1);
        height: 100%;
        
        .inner-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            
            .inner-navigation {
                display: flex;
                align-items: center;
                height: 100%;
                
                .list-navigation {
                    display: flex;
                    height: 100%;
                    
                    .list-item {
                        padding: 0 .5em;
                        
                        .data-value {
                            padding: .5em;
                            font-size: .925em;
                            cursor: pointer;
                        }
                    }
                }
            }
            
            .inner-contact {
                .list-contact {
                    display: flex;
                    height: 100%;

                    .list-item {
                        padding: 0 .5em;
                        border-right: .01em solid #333;
                        
                        &:last-of-type {
                            border-right: 0;
                        }

                        .data-value {
                            padding: .5em;
                            font-size: .725em;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletL}) {
        
    }
`;
