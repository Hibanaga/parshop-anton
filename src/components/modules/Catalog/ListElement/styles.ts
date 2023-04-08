import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    padding: .5em 1em;
    transition: 150ms;
    position: relative;
    background-color: #FFF;

    .inner-image {
        position: relative;
        z-index: 0;
        min-height: 16em;
        
        img {
            z-index: 0;
        }
    }

    .inner-content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1em .75em;

        .data-name {
            display: block;

            text-align: center;
            font-size: .675em;
            color: #3f3f3f;
        }

        .data-price {
            display: block;
            padding-top: .375em;
            font-size: .725em;
            font-weight: 500;
        }
    }
    
    .inner-additional {
        z-index: 10;
        opacity: 0;
        transition: 150ms;
        
        .data-description {
            display: block;
            
            text-align: center;
            font-size: .725em;
            color: #3f3f3f;
            background-color: #FFF;
            overflow: hidden;
            transition: 150ms ease-in-out;
            transform: translateY(0.5em);
        }

        .inner-actions {
            position: relative;
            margin-top: 1em;
            height: 2em;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .button-show-details {
                border: none;
                outline: none;
                background-color: #000;
                color: #FFF;
                padding: .5em 1em;
                cursor: pointer;
            }
            
            .icon {
                cursor: pointer;
                width: 1em;
                height: 1em;
                
                position: absolute;
                right: 5%;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, .15);
        transform: translateY(-.5em);
        border-radius: .125em;
        z-index: 15;

        .inner-additional {
            opacity: 1;

            .data-description {
                transform: translateY(0em);
            }
        }
    }


    @media all and (max-width: ${variables.tabletS}) {
    }
`;

