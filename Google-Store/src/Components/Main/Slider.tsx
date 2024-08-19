import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Box, Stack, Typography } from "@mui/material";

type Props = {};

function Slider({}: Props) {
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
      <>
        <Swiper
          slidesPerView={5}
          style={{ height: "350px", width: "1150px", marginTop: "100px" }}
          spaceBetween={10}
          scrollbar={{ hide: true }}
          modules={[Pagination, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "start",
                color: "rgb(60, 64, 67)",
              }}
            >
              <img
                style={{
                  width: "212px",
                  height: "212px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                }}
                src="https://lh3.googleusercontent.com/Pn6gWhoGgOWaR5vHJ0v0gN4Ag2s42wwHhFyKfvYCyaR3cavQ4sTSQknSnUhooc_aMbp_1JHFI_P8fpND3n4Jyu53aXLiFzR3GZo=rw-e365-w3000"
                alt=""
              />

              <Typography fontSize={"16px"} fontWeight={"700"}>
                Pixel 9 Pro y Pro XL
              </Typography>
              <Typography marginTop={"10px"} fontSize={"16px"}>
                Desde 1099 €
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "start",
                color: "rgb(60, 64, 67)",
              }}
            >
              <img
                style={{
                  width: "212px",
                  height: "212px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                }}
                src="https://lh3.googleusercontent.com/qdVzknB7ZFrwcDS1ch2d8GbJLzQtcglQiLeBFfoptCWfUggG_WNVASwpdOp8CXJvsJgYmq4Hf6y1VPnxIhpgsU3bS_w1RdZgDg=rw-e365-w3000"
                alt=""
              />
              <Typography fontSize={"16px"} fontWeight={"700"}>
                Pixel 9
              </Typography>
              <Typography marginTop={"10px"} fontSize={"16px"}>
                Desde 899 €
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "start",
                color: "rgb(60, 64, 67)",
              }}
            >
              <img
                style={{
                  width: "212px",
                  height: "212px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                }}
                src="https://lh3.googleusercontent.com/lr7n7GAwPgruwHmsM6zNwGs5DiOaj8udTXdP9A-GCEzeQdTtix1j_Wx41tXGHvGT-d4VgaAN_DmZWKniZTWRKmhSvlqtli5UePdY=rw-e365-w3000"
                alt=""
              />
              <Typography fontSize={"16px"} fontWeight={"700"}>
                Pixel Watch 3
              </Typography>
              <Typography marginTop={"10px"} fontSize={"16px"}>
                Desde 399 €
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "start",
                color: "rgb(60, 64, 67)",
              }}
            >
              <img
                style={{
                  width: "212px",
                  height: "212px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                }}
                src="https://lh3.googleusercontent.com/Q9qx3cQq7CqhFrEx_hFrXGpDOwexVFu2hsaN28lszpZ3l4thqlL6af5Spz4lm9fQpPGcw3AyqLafKtLhKPz8PmUuQlZ_vdigXNw=rw-e365-w3000"
                alt=""
              />
              <Typography fontSize={"16px"} fontWeight={"700"}>
                Pixel Buds Pro 2
              </Typography>
              <Typography marginTop={"10px"} fontSize={"16px"}>
                Desde 249 €
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "start",
                color: "rgb(60, 64, 67)",
              }}
            >
              <img
                style={{
                  width: "212px",
                  height: "212px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                }}
                src="https://lh3.googleusercontent.com/QurmYuqyZUDVtZL5EEanoxv1z-0Iz4CQ14heE2MLkCUU0wDNW-9CKpNNO9rr9ElMgV1FJ5jFppmX2qTX6tEgZKDPj74_qqERPQI=rw-e365-w3000"
                alt=""
              />
              <Typography fontSize={"16px"} fontWeight={"700"}>
                Pixel Tablet
              </Typography>
              <Typography marginTop={"10px"} fontSize={"16px"}>
                Desde 499 €
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "start",
                color: "rgb(60, 64, 67)",
              }}
            >
              <img
                style={{
                  width: "212px",
                  height: "212px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                }}
                src="https://lh3.googleusercontent.com/aTibKmfznuwED10oiuouIgdI3HamBhtcZTXU5Fzatx7UT1rkzOga90f1RS5nVA2HDk1_1QJo3HZvmiO7z55nq12WUAu1S_tSX8U=rw-e365-w3000"
                alt=""
              />
              <Typography fontSize={"16px"} fontWeight={"700"}>
                Fitbit Charge 6
              </Typography>
              <Typography marginTop={"10px"} fontSize={"16px"}>
                Desde 159,95 €
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "start",
                color: "rgb(60, 64, 67)",
              }}
            >
              <img
                style={{
                  width: "212px",
                  height: "212px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                }}
                src="https://lh3.googleusercontent.com/7qIm8YaXTiPfN0FFSohaqVRUcx3zFgVkBIZgCc8In0BlhqwEY45bGkoSscZS1np0hC-wo_6wrFyYO9_DU6NPuton6FT3wyXPyusx=rw-e365-w3000"
                alt=""
              />
              <Typography fontSize={"16px"} fontWeight={"700"}>
                Pixel 8a
              </Typography>
              <Typography marginTop={"10px"} fontSize={"16px"}>
                Desde 549 €
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "start",
                color: "rgb(60, 64, 67)",
              }}
            >
              <img
                style={{
                  width: "212px",
                  height: "212px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                }}
                src="https://lh3.googleusercontent.com/ux0tKvfSWQ1F47ZJUpKdyj5w7lDOU2Tk4wx05IGGnfhftxSTrfn8BWmEVAhisynRpkRdw4LBDDUq8PkkXt0_zY3WgJY5oFloXXfJ=rw-e365-w3000"
                alt=""
              />
              <Typography fontSize={"16px"} fontWeight={"700"}>
                Nest Wifi Pro
              </Typography>
              <Typography marginTop={"10px"} fontSize={"16px"}>
                Desde 219,99 €
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "start",
                color: "rgb(60, 64, 67)",
              }}
            >
              <img
                style={{
                  width: "212px",
                  height: "212px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                }}
                src="https://lh3.googleusercontent.com/izQXolsF59ei8AWtl50bDnXKdw6FMKXj1QK22XizgujXjs5LmaberOjsugeA0VxmZCejVgdSxpOhuaabeQ4L-vwvW3Y3nBkJBhAF=rw-e365-w3000"
                alt=""
              />
              <Typography fontSize={"16px"} fontWeight={"700"}>
                Chromecast con Google TV
              </Typography>
              <Typography marginTop={"10px"} fontSize={"16px"}>
                Desde 39.,99 €
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </>
    </Stack>
  );
}

export default Slider;
