import { Container, ImageListItem, Stack, Typography } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

type Props = {};

function Footer({}: Props) {
  const links = [
    "España",
    "Privacidad",
    "Compromiso con la Privacidad de Google Nest",
    "Condiciones de venta",
    "Terminos de Servicios",
  ];

  return (
    <Container maxWidth={"xl"}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{
          width: "100%",
          borderTop: "1px solid gray",
        }}
        marginTop={"10vh"}
        paddingTop={".5vh"}
      >
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ flexGrow: 1 }}
        >
          <XIcon fontSize="medium" sx={{ ":hover": { cursor: "pointer" } }} />
          <InstagramIcon
            fontSize="medium"
            sx={{ ":hover": { cursor: "pointer" } }}
          />
          <FacebookIcon
            fontSize="medium"
            sx={{ ":hover": { cursor: "pointer" } }}
          />
          <YouTubeIcon
            fontSize="medium"
            sx={{ ":hover": { cursor: "pointer" } }}
          />
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <ImageListItem sx={{ width: "24px", height: "18px" }}>
            <img
              src="https://ssl.gstatic.com/store/images/regionflags/spain.png"
              alt=""
            />
          </ImageListItem>
          {links.map((link) => (
            <>
              <Typography
                key={link}
                sx={{
                  fontSize: "12px",
                  color: "gray",
                  ":hover": { cursor: "pointer", textDecoration: "underline" },
                }}
              >
                {link}
              </Typography>
            </>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

export default Footer;
