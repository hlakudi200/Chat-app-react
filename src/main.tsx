import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./provider/authprovider/authProvider.tsx";
import {UserProfileProvider} from "./provider/userProfileProvider/index.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProfileProvider>
          <App />
        </UserProfileProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
