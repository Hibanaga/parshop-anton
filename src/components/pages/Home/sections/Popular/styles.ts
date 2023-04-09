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

            .data-value {
            }
        }
    }

    .popular-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em 2%;
        margin: 2em 0;

        .popular-list-element {
            cursor: pointer;
            position: relative;

            &:hover {
                .button-show {
                    transform: translateX(0);
                    opacity: 1;
                }
                
                .inner-content {
                    .inner-scollable {
                        .data-price {
                            transform: translateY(-1.5em);
                        }

                        .show-more {
                            transform: translateY(-1.75em);
                        }
                    }
                }
            }

            .button-show {
                position: absolute;
                z-index: 1;
                top: 1em;
                right: 1em;
                width: 2.5em;
                height: 2.5em;
                background-color: #FFF;
                border: .01em solid #BBB;
                box-shadow: 1px 1px 1px rgba(0, 0, 0, .1);
                transition: 350ms;
                transform: translateX(1em);
                opacity: 0;

                .icon {
                    position: absolute;
                    width: 1em;
                    height: 1em;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: #000000;
                }
            }

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

                .inner-scollable {
                    height: 1.2em;
                    overflow: hidden;

                    .data-price {
                        font-size: 1em;
                        font-weight: 500;
                        display: block;
                        padding: .2em 0;
                        text-transform: uppercase;
                        transition: 250ms;
                    }

                    .show-more {
                        display: block;
                        font-size: .825em;
                        transition: 250ms;
                    }
                }
            }
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

