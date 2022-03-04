
import React, {useEffect, useState}  from 'react';
import { BoxIncDec } from '../boxIncDec/boxIncDec.style';
import InfoTip from '../infoTip/infoTip';

const PanellInput = (props) => {

  const [num, setNum] = useState(props.numShow);

  const handleInputChange = (event) => {
    setNum(event.target.value);
  }

  useEffect(()=> {
      props.getNumber(num);
    }
  )

  return (
    <>
      <BoxIncDec onClick={() => (num>1) ? setNum(num - 1) : setNum(1)}>-</BoxIncDec>
      <input type="number" min="1" value={props.numShow} onChange={handleInputChange}/>
      <BoxIncDec onClick={() => setNum(num + 1)}>+</BoxIncDec>
      <InfoTip 
        msg={props.msg}
      />
    </>

  )
}

export default PanellInput;