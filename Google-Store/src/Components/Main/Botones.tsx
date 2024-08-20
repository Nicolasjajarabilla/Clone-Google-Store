import { Button } from "@mui/material";

type Props = {};

function Botones({}: Props) {
  return (
    <Button
      disableRipple
      sx={{
        marginTop: "3vh",
        color: "black",
        border: "2px solid black",
        fontSize: "14px",
        ":hover": {
          opacity: "0.8",
          backgroundColor: "trasparent",
        },
      }}
      children="Mas informacion"
    ></Button>
  );
}

export default Botones;
