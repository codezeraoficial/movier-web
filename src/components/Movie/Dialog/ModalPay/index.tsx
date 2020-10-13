import React, { useContext } from 'react';
import ButtonDefault from '../../design/components/buttonDefault';
import { LabelMedium, LabelSmall } from '../../design/components/label';
import BackDrop from '../BackDrop';
import { FaTimes, FaArrowLeft } from 'react-icons/fa';
import ModalContext from '../../../../contexts/modal/modal';
// import { Container } from './styles';

const ModalPay: React.FC = () => {
  const { setOpenModalPay, openModalPay } = useContext(ModalContext);

  return (
    <BackDrop>
      <div className={openModalPay ? 'modalPay modal-fadein' : 'modalPay modal-fadeout'}>
        <FaArrowLeft size={40} color='#FFF' onClick={()=> setOpenModalPay(!openModalPay)}/>
        <div className="modalPay__content">
          <LabelMedium label={'Please enter your ticket code'} />
          <br />
          <br />
          <LabelMedium label={'Price Release: $20.00'} />
          <LabelSmall label={'Your credits: $60.00'} />
          <div className="modalPay__content--buttons">
            <ButtonDefault label={'Purchase'} width={700} />
            <ButtonDefault label={'Go to the room!'} width={700} />
            <ButtonDefault label={'Buy credits'} width={700} />
          </div>
        </div>
      </div>
    </BackDrop>
  );
}

export default ModalPay;