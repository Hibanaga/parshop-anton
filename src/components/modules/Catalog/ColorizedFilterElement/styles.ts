import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5em 0;
    cursor: pointer;
    
    &.active {
        .inner-count {
            background-color: #000;

            .data-count {
                color: #FFF;
            }
        }

        .data-content {
            .data-color {
                .icon {
                    opacity: 1;
                }
            }
        }
    }

    .data-content {
        display: flex;
        align-items: center;
        position: relative;

        .data-color {
            position: relative;
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            
            .icon {
                position: absolute;
                top: 50%;
                left: 50%;
                color: #FFF;
                transform: translate(-50%, -50%);
                opacity: 0;
            }
        }
        .data-value {
            padding-left: .65em;
        }
        
        .icon {
            position: absolute;
            right: -25%;
            width: 1em;
            height: 1em;
        }
    }

    &:hover {
        .inner-count {
            background-color: #000;

            .data-count {
                color: #FFF;
            }
        }

        .data-content {
            .data-color {
                .icon {
                    opacity: 1;
                }
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

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

