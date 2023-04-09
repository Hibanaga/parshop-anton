import styled from '@emotion/styled';

export default styled.section`
    position: relative;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    
    .button {
        position: relative;
        border: none;
        outline: none;
        height: 2.5em;
        min-width: 2.5em;
        padding: 0;
        cursor: pointer;
        
        &:hover {
            opacity: .5;
        }
        
        .icon {
            color: #6f6f6f;
            width: 1em;
            height: 1em;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: 150ms;
            position: absolute;
        }
        
        &:hover {
            .icon {
                color: #333;
            }
        }
    }
    
    .input {
        outline: none;
        text-align: center;
        border: none;
        width: 100%;
        background-color: transparent;
        color: #6f6f6f;
        padding: 0;
    }
`;
