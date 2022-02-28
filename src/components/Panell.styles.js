import styled from 'styled-components';

export const PanellStyles = styled.div`

    display: ${({active}) => active ? 'block' : 'none'};
    border: 2px solid #000;
    border-radius: 26px;
    text-align: left; 
    padding: 12px;
    margin: 12px 0;
    width: 50%;

    label {
        display: block;
        margin-bottom: 8px;
    }

    input {
        margin-left: 5px;
    }
`;