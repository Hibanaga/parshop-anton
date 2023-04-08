import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    margin: 2em 0;
    
    .inner-image {
        position: relative;
        width: 100%;
        overflow: hidden;
        cursor: pointer;

        img {
            transition: 300ms ease-in-out;
            opacity: .85;
        }

        &:hover {
            img {
                transform: scale(1.1);
                opacity: .75;
            }

            .inner-content {

                .headline {
                    transform: translateY(-.5em);
                }

                .span-hint {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        }
    }

    .inner {
        display: flex;
        gap: .5em;
        
        .column-main {
            width: 50%;
            position: relative;
            
            .inner-main {
                min-height: 32.5em;
            }
        }
        .column-additional {
            width: 50%;
            
            .inner-second {
                min-height: 16em;
            }
            
            .inner-additional {
                margin-top: .5em;
                display: flex;
                gap: .5em;
                
                .inner-third {
                    width: 60%;
                    min-height: 16em;
                }
                .inner-four {
                    width: 40%;
                    min-height: 16em;
                }
            }
        }
        
    }


    .inner-content {
        position: absolute;

        top: 50%;
        left: 10%;
        transform: translate(0, -50%);
        
        .headline {
            transition: 300ms;
            font-size: 2em;
            font-weight: 400;
            letter-spacing: .15em;
            
            &.headline-sale {
                color: #d32626;
            }
        }
        
        .span-hint {
            transition: 300ms;
            display: inline-block;
            color: #333;
            position: relative;
            transform: translateY(.5em);
            opacity: 0;
            
            &:after {
                content: "";
                position: absolute;
                height: .1em;
                width: 100%;
                background-color: #333;
                bottom: -10%;
                left: 0;
            }
        }
    }
    
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;

