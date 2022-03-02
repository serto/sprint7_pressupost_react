
import React, {useState} from 'react';
import Form from './components/form';
import {Wrapper, WrapperForm, TitleBig, Description, GlobalStyle} from './styles/styles';

import { ButtonForm } from './components/button.style';

function App() {

  const [firstScreen, setFirstScreen] = useState(true);

  const secondScreen = () => setFirstScreen(false);

  return (
    <div>
      <GlobalStyle />
      
      {firstScreen ? 
      
        <Wrapper>
          <TitleBig>Welcome !!!</TitleBig>
          <Description>
          Exercici de React pel módul 7 del curs d'IT Academy, on es treballen useState, useEffects, LocalStorage i Hooks.
          </Description>
          <ButtonForm onClick={secondScreen}>Començar</ButtonForm>
        </Wrapper>

      :
        <WrapperForm>
          <h2>Que vols fer ?</h2>

          <Form />

        </WrapperForm>
      }
    </div>

  );
}

export default App;
