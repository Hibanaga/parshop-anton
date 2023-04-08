import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

