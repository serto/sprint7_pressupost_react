import styled from 'styled-components';

export const BoxMessageStyle = styled.div`

  display: ${({active}) => active ? 'flex' : 'none'};
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;

  p {
    border: 2px solid black;
    border-radius: 8px;
    background-color: white;
    padding: 12px;
    text-align: center;
    max-width: 75%;
  }
`;