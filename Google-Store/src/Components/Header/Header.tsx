import {
  AppBar,
  Box,
  Button,
  ImageListItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";
import Input from "./Input";
import { useState } from "react";

type Props = {};

function Header({}: Props) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    {
      setActive(!active);
    }
  };

  const links = [
    "Telefono",
    "Auriculares de botones",
    "Tablets",
    "Relojes y pulseras de actividad",
    "Hogar inteligente",
    "Accesorios",
    "Ofertas",
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
      }}
    >
      <Toolbar>
        <Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            <ImageListItem sx={{ width: "30px", height: "30px" }}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/013/948/549/original/google-logo-on-transparent-white-background-free-vector.jpg"
                alt="Google Logo"
              />
            </ImageListItem>
            {active ? (
              <Box>
                <Input />
              </Box>
            ) : (
              links.map((link) => (
                <Typography
                  key={link}
                  sx={{
                    fontSize: { xs: "12px", sm: "14px" },
                    ":hover": {
                      color: "#1967d2",
                      cursor: "pointer",
                    },
                  }}
                >
                  {link}
                </Typography>
              ))
            )}
          </Stack>
          <Box sx={{ flexGrow: 0.8, marginLeft: { xs: "5vw", sm: "10vw" } }}>
            <Stack direction="row" spacing={0}>
              <Button
                onClick={handleClick}
                disableRipple
                sx={{
                  ":hover": { backgroundColor: "transparent" },
                  alignContent: "center",
                  width: "0px",
                }}
              >
                <SearchIcon
                  sx={{
                    color: "gray",
                    fontSize: { xs: "20px", sm: "25px" },
                    ":hover": { cursor: "pointer", color: "#1967d2" },
                  }}
                />
              </Button>
              <Button
                disableRipple
                sx={{
                  ":hover": { backgroundColor: "transparent" },
                  alignContent: "center",
                  width: "0px",
                }}
              >
                <HelpIcon
                  sx={{
                    color: "gray",
                    fontSize: { xs: "20px", sm: "25px" },
                    ":hover": { cursor: "pointer", color: "#1967d2" },
                  }}
                />
              </Button>
              <Button
                disableRipple
                sx={{
                  ":hover": { backgroundColor: "transparent" },
                  alignContent: "center",
                  width: "0px",
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    color: "gray",
                    fontSize: { xs: "20px", sm: "25px" },
                    ":hover": { cursor: "pointer", color: "#1967d2" },
                  }}
                />
              </Button>
              <Button
                disableRipple
                sx={{
                  ":focus": { backgroundColor: "transparent" },
                  ":hover": { backgroundColor: "transparent" },
                  alignContent: "center",
                  width: "0px",
                }}
              >
                <AccountCircleIcon
                  sx={{
                    color: "gray",
                    fontSize: { xs: "20px", sm: "25px" },
                    ":hover": { cursor: "pointer", color: "#1967d2" },
                  }}
                />
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
