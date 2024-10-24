import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import { Helmet } from "react-helmet";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./components/Context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={`flex flex-col items-center justify-center ${theme === 'dark' ? "bg-black text-white" : ""}`}>
      <Helmet />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
