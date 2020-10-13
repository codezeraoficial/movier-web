import React, { createContext, useEffect, useState } from "react";

interface ModalContextData {
  openModalPay: boolean;
  openBackdrop: boolean;
  setOpenModalPay: (openModalPay: boolean) => void;
  setOpenBackdrop: (openModalPay: boolean) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider: React.FC = ({ children }) => {
  const [openBackdrop, setOpenBackdrop] = useState<boolean>(false);
  const [openModalPay, setOpenModalPay] = useState<boolean>(false);

  useEffect(()=>{
    console.log(openBackdrop);
    
    if(!openBackdrop){
      setOpenModalPay(false)
    }
  },[openBackdrop])


  return (
    <ModalContext.Provider value={{ openModalPay, setOpenModalPay, openBackdrop, setOpenBackdrop }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
