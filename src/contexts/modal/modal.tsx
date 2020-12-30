import React, { createContext, useContext, useState } from "react";
import { MovieModel } from "../../Interfaces/Models/Movier/Movie";
import { GetMovieById } from "../../services/Movie/Movie";
import MovieContext from "../movie/movie";

interface ModalContextData {
  modalPay: boolean;
  setModalPay: (openModalPay: boolean) => void;
  openModalPay: (id: string) => void;
  closeModalPay: () => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider: React.FC = ({ children }) => {
  const { setMovie } = useContext(MovieContext);
  const [modalPay, setModalPay] = useState<boolean>(false);

  const openModalPay = async (id: string) => {   
    const response = await GetMovieById(id);
    if (response) {  
      setMovie(response);
      setModalPay(true);
    }
  }
  const closeModalPay = () => {
    setModalPay(false);
    setMovie({} as MovieModel);
  }


  return (
    <ModalContext.Provider value={{ modalPay, setModalPay, openModalPay, closeModalPay }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
