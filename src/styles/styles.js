import styled, { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
  width: 75%;
  margin: 24px auto 0;
  text-align: center;
`;

export const WrapperForm = styled.div`
width: 85%;
margin: 24px auto 0;
`;

export const TitleBig = styled.h1`
  font-size: 3rem;
  font-style: italic;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 60px;
`;

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
  }

	button {
    width: 50%;
    margin-bottom: 24px;
    padding: 12px 0;
    font-size: 1.4rem;
	}

  label {
    margin-bottom: 4px;
    display: inline-block;

    input[type='text'] {
      margin-left: 8px;
    }
  }

  table {
    text-align: center;
  }
  th {
    font-size: 0.9rem;
    padding: 0 4px;
  }
  tr {
    border: 1px solid black;
  }
`;