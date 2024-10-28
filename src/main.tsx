import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./Context/ThemeContext.tsx";
import { ModalProvider } from "./Context/ModalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </ThemeProvider>
);
