import styled, { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
  width: 75%;
  margin: 24px auto 0;
  text-align: center;
`;

export const WrapperForm = styled.div`
width: 75%;
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
`;