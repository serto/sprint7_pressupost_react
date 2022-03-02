
import React, {useState, useEffect} from 'react';
import { PanellStyles } from './Panell.styles';

import PanellInput from './panellInput';

const Panell = (props) => {

  const numPagesLocSt = JSON.parse(window.localStorage.getItem("numPages"));
  const numLangLocSt = JSON.parse(window.localStorage.getItem("numLang"));
  
  console.log('ternaria numPagesLocSt : ' , numPagesLocSt ? numPagesLocSt : '1');
  console.log('ternaria numLangLocSt : ' , numLangLocSt ? numLangLocSt : '1');

  const [numPages, setNumPages] = useState( numPagesLocSt ? numPagesLocSt : '1');
  const [numLang, setNumLang] = useState( numLangLocSt ? numLangLocSt : '1');
  console.log('setnum : ', numPages);
  console.log('setNumLang : ', numLang);

  const [total, setTotal] = useState(0);

  const updatePages = (num) => setNumPages(num);
  const updateLang = (num) => setNumLang(num);

  useEffect(() => {

    //setNumPages(numPagesLocSt ? numPagesLocSt : '1');
    //setNumLang(numLangLocSt_value);

    if (numPages >= 2 || numLang>=2) {
      const valueTotal = numPages * numLang * 30;
      props.getValue(valueTotal);
      setTotal(valueTotal);
      window.localStorage.setItem("numPages", numPages);
      window.localStorage.setItem("numLang", numLang);
    }
    if (numPages === 1 && numLang === 1) {
      props.getValue(0);
      setTotal(0);
    }
    if (numPages === 1) { window.localStorage.setItem("numPages", "1"); }
    if (numLang === 1) { window.localStorage.setItem("numLang", "1"); }


  },[numPages, numLang, numPagesLocSt, numLangLocSt])

  return (
    <PanellStyles active={props.active}>
      <label>
        Número de pàgines
        <PanellInput getNumber={updatePages} numShow={numPages} />
      </label>
      <label>
        Número d'idiomes
        <PanellInput getNumber={updateLang} numShow={numLang} />
      </label>
    </PanellStyles>
  )
}

export default Panell;