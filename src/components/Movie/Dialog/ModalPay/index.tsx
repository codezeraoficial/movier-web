import React, { useContext } from 'react';
import ButtonDefault from '../../design/components/buttonDefault';
import { LabelMedium, LabelSmall } from '../../design/components/label';
import { FaArrowLeft } from 'react-icons/fa';
import BackDrop from '../BackDrop';
import ModalContext from '../../../../contexts/modal/modal';
import ButtonLink from '../../design/components/buttonLink';
import MovieContext from '../../../../contexts/movie/movie';
import AuthContext from '../../../../contexts/auth/auth';
import { formatter } from '../../../../utils/formatCurrency';
import SignUpContext from '../../../../contexts/user/user';

// import { Container } from './styles';

const ModalPay: React.FC = () => {
  const { setModalPay, modalPay } = useContext(ModalContext);
  const { movie } = useContext(MovieContext);
  const { userBuy } = useContext(AuthContext);
  const { buyMovie } = useContext(SignUpContext);


  const purchaseDisabled = userBuy.credits <= movie.price || userBuy.movies_id.includes(movie._id);
  const roomDisabled =  userBuy.movies_id.includes(movie._id);
  

  return (
    <BackDrop>
      <div className={modalPay ? 'modalPay modal-fadein' : 'modalPay modal-fadeout'}>
        <FaArrowLeft size={40} color='#FFF' onClick={() => setModalPay(!modalPay)} />
        <div className="modalPay__content">
          <LabelMedium label={'Please buy your ticket'} />
          <br />
          <br />
          <LabelMedium label={`Price Release: ${formatter.format(movie.price)}`} />
          <LabelSmall label={`Your credits: ${formatter.format(userBuy.credits)}`} />
          <div className="modalPay__content--buttons">
            <ButtonDefault label={'Purchase'} width={700}  disabled={purchaseDisabled} click={() => buyMovie(userBuy.id, movie._id)}/>
            <ButtonLink label={'Go to the room!'} nav={`/room`} width={700} disabled={!roomDisabled}/>
            <ButtonDefault label={'Buy credits'} width={700} />
          </div>
        </div>
      </div>
    </BackDrop>
  );
}

export default ModalPay;