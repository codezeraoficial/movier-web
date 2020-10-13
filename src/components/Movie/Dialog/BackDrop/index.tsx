import React, { useContext } from 'react';
import ModalContext from '../../../../contexts/modal/modal';


const BackDrop: React.FC = ({ children }) => {
  const { openBackdrop } = useContext(ModalContext);

  return (
    <div className="backDrop" style={{visibility: openBackdrop ? 'visible' : 'hidden'}}>{children}</div>
  );
}

export default BackDrop;