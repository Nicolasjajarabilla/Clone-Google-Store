import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";

type Props = {};

function App({}: Props) {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
