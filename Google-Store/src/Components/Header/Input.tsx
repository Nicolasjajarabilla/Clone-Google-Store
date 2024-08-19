import { Box } from "@mui/material";

type Props = {};

function Input({}: Props) {
  return (
    <Box sx={{ position: "relative", width: "100%", left: "10vw" }}>
      <input
        type="text"
        placeholder="Buscar"
        style={{
          width: "35vw",
          height: "5vh",
          fontSize: "20px",
          backgroundColor: "#f5f5f5",
          marginLeft: "10vw",
          border: "none",
          borderBottom: "5px solid #1967d2",
          outline: "none",
          borderRadius: "0px",
          paddingLeft: "10px",
          paddingRight: "10px",
          color: "#000",
        }}
      />
    </Box>
  );
}

export default Input;
