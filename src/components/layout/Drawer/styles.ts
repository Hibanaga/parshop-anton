import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    color: #fff;
    background-color: #fff;
    //border-top-left-radius: 16px;
    flex-direction: column;
    display: flex;
    z-index: 50;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 20em;
    height: 100vh;
    box-shadow: 0 5px 35px 0 rgb(0 0 0 / 10%);
    transition: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    &.animatedIn {
        transform: translateX(0px);
    }

    &.animatedOut {
        transform: translateX(100%);
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;
