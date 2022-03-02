
import React, {useState} from 'react';
import { InfoTipStyle } from './infoTip.style';
import { BoxMessageStyle } from './boxMessage.style';

const InfoTip = (props) => {

  const [showMsg, setShowMsg] = useState(false); 

  return (
    <>
      <InfoTipStyle onClick={() => setShowMsg(true) }>i</InfoTipStyle>
      <BoxMessageStyle active={showMsg} onClick={() => setShowMsg(false) }>
        <p>{props.msg}</p>
      </BoxMessageStyle>
    </>

  )
}

export default InfoTip;