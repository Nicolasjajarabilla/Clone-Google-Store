import { Box, ImageListItem, Stack, Typography } from "@mui/material";
import Botones from "./Botones";

type Props = {};

function Accesorios({}: Props) {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      alignItems={"center"}
      justifyContent={"center"}
      marginTop={"5vh"}
      width={"auto"}
      height={"auto"}
    >
      <Box
        sx={{
          backgroundColor: "#f5f3ef",
          borderRadius: "20px",
        }}
      >
        <Typography
          sx={{ marginTop: "3vh", fontSize: "16px", fontWeight: "bold" }}
        >
          Pixel Watch 3
        </Typography>
        <Typography
          sx={{
            marginTop: "3vh",
            fontSize: "40px",
            fontWeight: "bold",
            width: "500px",
          }}
        >
          Tu guía. Tus objetivos. Tu estilo.
        </Typography>
        <Botones />
        <ImageListItem
          sx={{ marginTop: "5vh", width: "500px", height: "500px" }}
        >
          <img
            src="https://lh3.googleusercontent.com/6Xq4Ki5oEeIyOTXYkIKKHnbsp95iSE7Si6auCvF9HlZ0nHLQ5TXeSFBMBa1IITMXSvXRaEy0OHvnF6e5D3y5MEPOWAqV7ERmpw=rw-e365-w3000"
            alt=""
          />
        </ImageListItem>
      </Box>
      <Box sx={{ backgroundColor: "#f5f3ef", borderRadius: "20px" }}>
        <Typography
          sx={{ marginTop: "3vh", fontSize: "16px", fontWeight: "bold" }}
        >
          Pixel Tablet
        </Typography>
        <Typography
          sx={{
            marginTop: "3vh",
            fontSize: "40px",
            fontWeight: "bold",
            width: "500px",
          }}
        >
          Ayuda al alcance de tu mano. Y en casa.
        </Typography>
        <Botones />
        <ImageListItem
          sx={{ marginTop: "5vh", width: "500px", height: "500px" }}
        >
          <img
            src="https://lh3.googleusercontent.com/ncP6eNpWkhrtJVQvWrkLQgxw1coIRJSiIbskvEdc1Ewfb1J3r_Vcl2uVU1XrGPTlFi5du-BBQ9id5bA6w_dED4G_uZPyHdlVOck=rw-e365-w3000"
            alt=""
          />
        </ImageListItem>
      </Box>
      <Box sx={{ backgroundColor: "#f5f3ef", borderRadius: "20px" }}>
        <Typography
          sx={{ marginTop: "3vh", fontSize: "16px", fontWeight: "bold" }}
        >
          Pixel Buds Pro 2
        </Typography>
        <Typography
          sx={{ marginTop: "3vh", fontSize: "40px", fontWeight: "bold" }}
        >
          Oír para creer.
        </Typography>
        <Botones />
        <ImageListItem
          sx={{ marginTop: "5vh", width: "500px", height: "500px" }}
        >
          <img
            src="https://lh3.googleusercontent.com/KGljX-yHEKafQd7rWaBbayrZjpWC8_h2J8B3FDIZRfwoQRv1Kr7_uDokMVZIS5RKhKR_Dsa7VIPR4P-oJrNwZJvd9SEjPmb7zZSB=rw-e365-w3000"
            alt=""
          />
        </ImageListItem>
      </Box>
    </Stack>
  );
}

export default Accesorios;
