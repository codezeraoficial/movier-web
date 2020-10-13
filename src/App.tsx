import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./contexts/auth/auth";
import { SignUpProvider } from "./contexts/user/user";
import { Router } from "react-router-dom";
import history from "./routes/history";
import { MovieProvider } from "./contexts/movie/movie";
import { ModalProvider } from "./contexts/modal/modal";

function App() {
  return (
    <Router history={history}>
      <AuthProvider>
        <SignUpProvider>
          <MovieProvider>
            <ModalProvider>
              <Routes />
            </ModalProvider>
          </MovieProvider>
        </SignUpProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
