
import React, {useState, useEffect} from 'react';
import { PanellStyles } from './Panell.styles';

import PanellInput from './panellInput';

const Panell = (props) => {

  const [numPages, setNumPages] = useState(1);
  const [numLang, setNumLang] = useState(1);

  const [total, setTotal] = useState(0);

  const updatePages = (num) => setNumPages(num);
  const updateLang = (num) => setNumLang(num);


  useEffect(() => {

    if (numPages >= 2 || numLang>=2) {
      const valueTotal = numPages * numLang * 30;
      props.getValue(valueTotal);
      setTotal(valueTotal);
    }
    if (numPages === 1 && numLang === 1) {
      props.getValue(0);
      setTotal(0);
    }

  },[numPages, numLang])

  return (
    <PanellStyles active={props.active}>
      <label>
        Número de pàgines
        <PanellInput getNumber={updatePages}/>
      </label>
      <label>
        Número d'idiomes
        <PanellInput getNumber={updateLang}/>
      </label>
    </PanellStyles>
  )
}

export default Panell;