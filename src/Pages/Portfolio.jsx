import React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Button,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image1 from "../assets/Images/Image1.png";
import Image2 from "../assets/Images/Image2.png";
import Image3 from "../assets/Images/Image3.png";
import Image4 from "../assets/Images/Image4.png";

export default function Portfolio() {
  const images = [
    {
      src: Image1,
      title: "Vista de Login",
      description:
        "Pantalla de inicio de sesión donde los usuarios pueden ingresar sus credenciales para acceder al sistema.",
    },
    {
      src: Image2,
      title: "Página de Inicio",
      description:
        "Página principal que muestra información sobre la empresa y enlaces a tus redes sociales.",
    },
    {
      src: Image3,
      title: "Módulo de Clientes",
      description:
        "Sección donde se gestionan los datos de los clientes, incluyendo la creación, edición y eliminación de registros.",
    },
    {
      src: Image4,
      title: "Módulo de Facturas",
      description:
        "Área dedicada a la gestión de facturas, permitiendo la creación, visualización y administración de facturas.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ marginBlock: '20vh' }}>
          <Typography
            variant="h3"
            sx={{
              marginBottom: "2vh",
              color: "white",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
            }}
          > 
            Demo de Nuestro Trabajo
          </Typography>
      <Carousel
        navButtonsAlwaysVisible
        indicators
        animation="slide"
        autoPlay={true}
        interval={5000}
      >
        {images.map((image, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: "100%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
            }}
          >
            <CardMedia
              component="img"
              image={image.src}
              alt={image.title}
              sx={{
                borderRadius: "10px 10px 0 0",
                objectFit: "cover",
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "bold",
                  color: "#3f51b5",
                  textAlign: "center",
                }}
              >
                {image.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textAlign: "center",
                  fontFamily: "Roboto, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                {image.description}
              </Typography>
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{
                    textTransform: "none",
                    fontFamily: "Roboto, sans-serif",
                    borderRadius: "20px",
                  }}
                >
                  Saber más
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Carousel>
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="body2"
          fontSize={30}
          color="text.secondary"
          align="center"
          sx={{ fontFamily: "Roboto, sans-serif" }}
        >
          Las imágenes son solo ejemplos y sirven a modo ilustrativo.
        </Typography>
      </Box>
    </Container>
  );
}
