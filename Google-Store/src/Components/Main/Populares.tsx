import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Slider from "./Slider";

type Props = {};

function Populares({}: Props) {
  return (
    <Container>
      <Box
        sx={{
          textAlign: "center",
          alignContent: "center",
          paddingTop: { xs: "2vh", sm: "20vh" },
        }}
      >
        <Typography width={"auto"} fontSize={"40px"} fontWeight={"700"}>
          Consigue hasta 563 € en descuentos con cualquiera de los nuevos
          teléfonos Pixel 9 Pro.
        </Typography>
        <Button
          disableRipple
          sx={{
            color: "#1967d2",
            alignItems: "center",
            textAlign: "center",
            marginTop: "20px",
            background: "transparent",
            border: "none",
            borderRadius: "0px",
            fontSize: "14px",
            fontWeight: "700",
            ":hover": {
              textDecoration: "underline 1px #1967d2",
              background: "transparent",
            },
          }}
        >
          Ver todas las ofertas
          {
            <ChevronRightIcon
              fontSize="medium"
              sx={{
                color: "#1967d2",
                position: "relative",
                left: "0px",
                top: "-2px",
              }}
            />
          }
        </Button>
      </Box>
      <Stack
        direction={"row"}
        spacing={-1}
        justifyContent={"space-evenly"}
        alignItems={"baseline"}
        marginTop={"80px"}
      >
        <CloseFullscreenIcon fontSize="large" sx={{ color: "gray" }} />
        <LocalOfferIcon fontSize="large" sx={{ color: "gray" }} />
        <AutoAwesomeIcon fontSize="large" sx={{ color: "gray" }} />
      </Stack>
      <Stack
        direction={"row"}
        spacing={4}
        justifyContent={"center"}
        alignItems={"baseline"}
        marginTop={"25px"}
        sx={{ textAlign: "center" }}
      >
        <Typography width={"250px"}>
          Hasta 200 € extra de valor promocional al renovar un dispositivo que
          cumpla los requisitos
        </Typography>
        <Typography width={"250px"}>
          Disfruta del doble de almacenamiento en tu nuevo dispositivo (valor de
          100 €)
        </Typography>
        <Typography width={"250px"}>
          1 año de Gemini Advanced, la nueva suscripción a la IA de Google
          (valor de 263 €)
        </Typography>
      </Stack>
      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
        <Typography
          variant="h3"
          fontWeight={"600"}
          color={"black"}
          textAlign={"center"}
        >
          Populares en Google Store.
        </Typography>
        <Slider />
      </Box>
    </Container>
  );
}

export default Populares;
