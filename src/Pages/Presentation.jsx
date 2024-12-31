import MainImage from "../assets/Images/LogoPrincipal.png";
import VerticalImage from "../assets/Images/LogoVertical.png";
import PresentationImage from "../assets/Images/PresentationImage.jpg";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

export default function Presentation() {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    });
  }, [window.innerHeight, window.innerWidth]);

  return (
    <div style={{ display: "grid", height: "100vh" }}>
      <img
        style={{ width: "100%", height: "100vh", position: "absolute" }}
        src={PresentationImage}
      />
      <img
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          width: "60%",
          position: "relative",
          paddingInline: "20%",
          marginBlock: "2vh",
          zIndex: 3,
        }}
        src={isPortrait ? VerticalImage : MainImage}
      />
      <div
        style={{
          height: "100%",
          width: "80%",
          marginInline: "10%",
          overflowY: "auto",
          zIndex: 2,
          position: "relative",
        }}
      >
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
          Soluciones Informáticas
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontFamily: "Poppins, sans-serif",
            fontSize: "1.5rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            textAlign: "center",
          }}
        >
          En <b>Zenithium</b>, nos especializamos en brindar servicios de
          consultoría tecnológica y desarrollo de software a medida para
          empresas que buscan optimizar sus procesos, aumentar su productividad
          y destacar en un mercado competitivo. Nuestro enfoque combina
          experiencia técnica, innovación y un profundo entendimiento de las
          necesidades de nuestros clientes para ofrecer soluciones
          personalizadas que generan resultados reales. Ya sea que necesites
          automatizar procesos, mejorar la experiencia de tus usuarios o
          implementar nuevas herramientas tecnológicas, estamos aquí para
          ayudarte a alcanzar tus metas. 💡 ¿Por qué elegirnos? Diseñamos
          soluciones escalables, seguras y fáciles de usar. Nos enfocamos en
          entender tu negocio para ofrecer estrategias personalizadas. Te
          acompañamos en cada etapa, desde la consultoría inicial hasta el
          soporte post-implementación. 🎯 ¡Es hora de llevar tu negocio al
          siguiente nivel! Contáctanos hoy mismo y descubre cómo podemos
          ayudarte a crecer con tecnología de vanguardia.
        </Typography>
      </div>
    </div>
  );
}
