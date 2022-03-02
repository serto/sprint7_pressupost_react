
import React, {useState, useEffect} from 'react';
import { PanellStyles } from './Panell.styles';

import PanellInput from './panellInput';

const Panell = (props) => {

  const numPagesLocSt = JSON.parse(localStorage.getItem("numPages"));
  const numLangLocSt = JSON.parse(localStorage.getItem("numLang"));
  
  const [numPages, setNumPages] = useState( numPagesLocSt ? numPagesLocSt : 1);
  const [numLang, setNumLang] = useState( numLangLocSt ? numLangLocSt : 1);

  const [total, setTotal] = useState(0);

  const updatePages = (num) => setNumPages(num);
  const updateLang = (num) => setNumLang(num);

  useEffect(() => {

    //REVISAR ELS LOCAL STORAGE !!!
    if (numPages >= 2 || numLang>=2) {
      const valueTotal = numPages * numLang * 30;
      props.getValue(valueTotal);
      setTotal(valueTotal);
      localStorage.setItem("numPages", numPages);
      localStorage.setItem("numLang", numLang);
    }
    if (numPages === 1 && numLang === 1) {
      props.getValue(0);
      setTotal(0);
    }
    if (numPages === 1) { localStorage.setItem("numPages", "1"); }
    if (numLang === 1) { localStorage.setItem("numLang", "1"); }


  },[numPages, numLang, numPagesLocSt, numLangLocSt])

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