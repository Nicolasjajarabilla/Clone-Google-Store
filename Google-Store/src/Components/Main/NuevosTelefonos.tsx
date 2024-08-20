import {
  Box,
  Button,
  Container,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import Accesorios from "./Accesorios";
import Botones from "./Botones";

type Props = {};

function NuevosTelefonos({}: Props) {
  return (
    <Container fixed>
      <Box sx={{ textAlign: "center", marginTop: "10vh" }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", fontSize: "45px" }}>
          Nuevos, increíbles y ya disponibles.
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={3}
          sx={{ marginTop: "10vh" }}
        >
          <Box sx={{ backgroundColor: "#f5f3ef", borderRadius: "20px" }}>
            <Typography
              sx={{ marginTop: "3vh", fontSize: "16px", fontWeight: "bold" }}
            >
              Pixel 9 pro y pro XL
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginTop: "3vh",
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              Pura magia, nivel Pro.
            </Typography>
            <Botones />
            <ImageListItem
              sx={{ width: "684px", height: "522px", marginTop: "5vh" }}
            >
              <img
                src="https://lh3.googleusercontent.com/mlmED2sjC0Dx6S_boGkY4c_BIUIQh0DfRJoeiATyUa_JtxEuh8yIfENCh4-kcRyQXLbNGQP7Ma2Rw-nUeTUeFAsid1LEFocu0E8=rw-e365-w3000"
                alt=""
              />
            </ImageListItem>
          </Box>
          <Box sx={{ backgroundColor: "#f5f3ef", borderRadius: "20px" }}>
            <Typography
              sx={{ marginTop: "3vh", fontSize: "16px", fontWeight: "bold" }}
            >
              Pixel 9
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginTop: "3vh",
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              El primero en tener lo último.
            </Typography>
            <Botones />
            <ImageListItem
              sx={{ width: "684px", height: "522px", marginTop: "5vh" }}
            >
              <img
                src="https://lh3.googleusercontent.com/xXAN_I3vTtsdrdcL8fwZA-1nLeo6cOg33Gfy4ne-_jRMknlPIPOyWGuJ1yQn04gtxyMhCu5GGaTlKc4aKg7YVlnto4cnipvwrWY=rw-e365-w3000"
                alt=""
              />
            </ImageListItem>
          </Box>
        </Stack>
        <Accesorios />
      </Box>
    </Container>
  );
}

export default NuevosTelefonos;
