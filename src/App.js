
import React, {useState} from 'react';
import Form from './components/form';
import {Wrapper, WrapperForm, TitleBig, Description, GlobalStyle} from './styles/styles';

function App() {

  const [price, setPrice] = useState(0);
  const [firstScreen, setFirstScreen] = useState(true);

  const updateTotal = (total) => {
    setPrice(total);
  }

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
          <button onClick={secondScreen}>Començar</button>
        </Wrapper>

      :
        <WrapperForm>
          <h2>Que vols fer ?</h2>

          <Form formPresu={updateTotal} />

          <p>Preu: {price} €</p>

        </WrapperForm>
      }
    </div>

  );
}

export default App;
