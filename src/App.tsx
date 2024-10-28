import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Solutions from "./components/Solutions/Solutions";
import Services from "./components/Services/Services";
import Services2 from "./components/Services2/Services2";
import Configure from "./components/Configure/Configure";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import Cta from "./components/Container/CTA";
import ModalForm from "./components/ModalForm/ModalForm";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-black text-white" : ""
      }`}
    >
        <Header />
        <Products />
        <Solutions />
        <Services />
        <Services2 />
        <Configure />
        <Cta />
        <Footer />
        <ModalForm />
    </div>
  );
}

export default App;
