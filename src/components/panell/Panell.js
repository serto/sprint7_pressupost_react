
import React, {useState} from 'react';
import { PanellStyles } from './Panell.styles';

import PanellInput from '../panellInput/panellInput';

const Panell = (props) => {

  const [numPages, setNumPages] = useState(props.nPages);
  const [numLang, setNumLang] = useState(props.nLangs);

  const updatePages = (num) => {
    setNumPages(num);
    props.getNPages(num);
  }
  const updateLang = (num) => {
    setNumLang(num);
    props.getNLangs(num);
  }
  
  return (
    <PanellStyles active={props.active}>
      <label>
        Número de pàgines
        <PanellInput 
          getNumber={updatePages} 
          numShow={numPages} 
          msg="Aqui has d'escriure el número de pàgines que tindrà el web"
        />
      </label>
      <label>
        Número d'idiomes
        <PanellInput
          getNumber={updateLang}
          numShow={numLang}
          msg="Aqui has d'escriure el número d'idiomes que tindrà el web"
        />
      </label>
    </PanellStyles>
  )
}

export default Panell;