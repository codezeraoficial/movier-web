import React from "react";
import { AuthProvider } from "./auth/auth";

// import { Container } from './styles';

const Provider: React.FC = () => {
  return (
    <>
      <AuthProvider />
    </>
  );
};

export default Provider;
