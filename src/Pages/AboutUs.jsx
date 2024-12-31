import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import MarDelPlataImage from "../assets/images/MarDelPlataImage.jpg";
import AboutUsImage from "../assets/Images/AboutUsImage.jpg";

export default function AboutUs() {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        marginBlock: "20vh",
      }}
    >
      <img
        id="AboutUs"
        style={{
          width: "100%",
          height: "30vh",
          objectFit: "cover",
          objectPosition: "0 72%"
        }}
        src={AboutUsImage}
      />
      <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
        >
          <Box
            flex={1}
            sx={{
              color: "white",
              backgroundColor: "transparent",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                color: "white",
                fontFamily: "Poppins, sans-serif",
                fontSize: "2rem",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Sobre Nosotros
            </Typography>
            <Stack
              spacing={2}
              sx={{
                color: "white",
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.1rem",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.1rem",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Bienvenidos a nuestra empresa, ubicada en el corazón de Mar del
                Plata, la perla del Atlántico. Desde el inicio, nos hemos
                dedicado a ofrecer soluciones innovadoras y servicios de alta
                calidad a nuestros clientes.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.1rem",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Nuestra misión es combinar la belleza natural de nuestra ciudad
                con la excelencia en nuestro trabajo. Nos enorgullece ser parte
                de esta comunidad vibrante y en constante crecimiento, y nos
                esforzamos por contribuir a su desarrollo y prosperidad.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.1rem",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                En cada proyecto que emprendemos, llevamos con nosotros el
                espíritu de Mar del Plata: su energía, su creatividad y su
                calidez. Estamos comprometidos con la satisfacción de nuestros
                clientes y con el crecimiento sostenible de nuestra región.
              </Typography>
            </Stack>
          </Box>
          <Box
            flex={1}
            sx={{
              height: 400,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "grey.200",
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={MarDelPlataImage}
              alt="Mar del Plata"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
