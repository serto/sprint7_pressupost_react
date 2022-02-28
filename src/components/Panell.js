
import React, {useState, useEffect} from 'react';
import { PanellStyles } from './Panell.styles';

const Panell = (props) => {

  const [panell, setPanell] = useState({
    numPages: 1,
    numLang: 1
  });

  const [total, setTotal] = useState(0);

  const handleInputChange = (event) => {
    
    setPanell({
      ...panell,
      [event.target.name] : event.target.value
    });

  }

  useEffect(() => {

    

    if (panell.numPages >= 2 || panell.numLang>=2) {
      const valueTotal = panell.numPages * panell.numLang * 30;
      props.getValue(valueTotal);
      setTotal(valueTotal);
    }
    if (panell.numPages === 1 && panell.numLang === 1) {
      props.getValue(0);
      setTotal(0);
    }

    if(props.active) {
      console.log('paso');
    }

  },[panell])

  return (
    <PanellStyles active={props.active}>
      <label>
        Número de pàgines
        <input type="number" id="tentacles" name="numPages" min="1" onChange={handleInputChange} />
      </label>
      <label>
        Número d'idiomes
        <input type="number" id="tentacles" name="numLang" min="1" onChange={handleInputChange} />
      </label>
    </PanellStyles>
  )
}

export default Panell;