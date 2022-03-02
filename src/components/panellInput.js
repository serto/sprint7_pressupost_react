
import React, {useEffect, useState}  from 'react';
import { BoxIncDec } from './boxIncDec.style';

const PanellInput = (props) => {

  const [num, setNum] = useState(1);

  const handleInputChange = (event) => {
    setNum(event.target.value);
  }

  useEffect(()=> {
      //setNum(props.numShow);
      props.getNumber(num);
    }
  )

  return (
    <>
      <BoxIncDec onClick={() => (num>1) ? setNum(num - 1) : setNum(1)}>-</BoxIncDec>
      <input type="number" min="1" value={props.numShow} onChange={handleInputChange}/>
      <BoxIncDec onClick={() => setNum(num + 1)}>+</BoxIncDec>
    </>

  )
}

export default PanellInput;