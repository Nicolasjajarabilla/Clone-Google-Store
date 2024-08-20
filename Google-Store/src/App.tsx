import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

type Props = {};

function App({}: Props) {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
