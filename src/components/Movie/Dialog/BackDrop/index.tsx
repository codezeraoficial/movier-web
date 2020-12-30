import React, { useContext } from 'react';
import ModalContext from '../../../../contexts/modal/modal';


const BackDrop: React.FC = ({ children }) => {
  const { modalPay } = useContext(ModalContext);

  return (
    <div className="backDrop" style={{visibility: modalPay ? 'visible' : 'hidden'}}>{children}</div>
  );
}

export default BackDrop;