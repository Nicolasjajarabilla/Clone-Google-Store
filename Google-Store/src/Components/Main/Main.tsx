import IA from "./IA";
import NuevosTelefonos from "./NuevosTelefonos";
import Populares from "./Populares";

type Props = {};

function Main({}: Props) {
  return (
    <>
      <IA />
      <Populares />
      <NuevosTelefonos />
    </>
  );
}

export default Main;
