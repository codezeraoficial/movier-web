import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./contexts/auth/auth";
import { SignUpProvider } from "./contexts/user/user";
import { Router } from "react-router-dom";
import history from "./routes/history";

function App() {
  return (
    <Router history={history}>
      <AuthProvider>
        <SignUpProvider>
          <Routes />
        </SignUpProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
