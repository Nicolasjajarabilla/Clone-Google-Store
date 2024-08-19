import { Box, Button, ImageListItem, Typography } from "@mui/material";

type Props = {};

function IA({}: Props) {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f3ef",
      }}
    >
      <Box sx={{ textAlign: "center", paddingTop: { xs: "2vh", sm: "5vh" } }}>
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "60px" },
            fontWeight: "bold",
            background:
              "linear-gradient(90deg, #217bfe 0%, #078efb 34%, #ac87eb 68%, #ee4d5d 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          variant="h2"
        >
          Hola, IA.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "12px", sm: "15px" },
            width: "auto",
            marginTop: "30px",
          }}
        >
          Te presentamos los nuevos Pixel 9 Pro XL, Pixel 9 Pro y Pixel 9 con
          Gemini.
        </Typography>
        <Button
          sx={{
            marginTop: "30px",
            color: "black",
            border: "2px solid black",
            fontWeight: "bold",
            background: "transparent",
            ":hover": {
              opacity: "0.8",
            },
          }}
        >
          Ver Teléfonos
        </Button>
      </Box>
      <ImageListItem
        sx={{ position: "relative", top: { xs: "3vh", sm: "6vh" } }}
      >
        <img
          src="https://lh3.googleusercontent.com/og__ftf0AtIG9RtjO1VTLGINk0clmW-nZM2t9prjh7h-PH3aASQdnCS8gkb2wy5Dkw4wOW6XTDiyl5nM9LAwM312Sj3jmW55fRAK=rw-e365-nu-w1950"
          alt="Pixel Phones"
        />
      </ImageListItem>
    </Box>
  );
}

export default IA;
