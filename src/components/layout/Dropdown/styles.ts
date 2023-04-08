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
                min-width: 15em;

                .button-content {
                    color: #FFF;
                    text-transform: uppercase;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;

                    .inner-description {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        .icon {
                            width: 1.5em;
                            height: 1.5em;
                            padding-right: .5em;
                        }
                    }

                    .icon {
                        width: 1.25em;
                        height: 1.25em;
                    }
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
        z-index: 1;
        
        opacity: 0;
        transform: translateY(1em);
    }

    @media all and (max-width: ${variables.tabletL}) {
        
    }
`;
