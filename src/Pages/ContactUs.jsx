import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { EMAIL } from "../Config.js";
import ContactUsImage from "../assets/Images/ContactUs.jpg";
import { Margin } from "@mui/icons-material";

export default function ContactForm() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  }

  return (
    <div style={{ marginBlock: "20vh"}}>
      <div style={{ position: "relative"}}>
        <Typography
          variant="p"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            color: "white",
            fontFamily: "Poppins, sans-serif",
            fontSize: "1.5rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            textAlign: "center",
          }}
        >
          Contactanos
        </Typography>
        <img
          id="ContactUs"
          style={{
            width: "100%",
            height: "25vh",
            objectFit: "cover",
            objectPosition: "0 30%",
          }}
          src={ContactUsImage}
        />
      </div>
      <Container sx={{ mt: 8, mb: 4, color: "#FFFFFF" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "70%",
            alignContent: "center",
            margin: "auto",
            height: "70vh",
          }}
        >
          <TextField
            label="Asunto"
            variant="outlined"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            sx={{
              "& .MuiInputLabel-root": {
                color: "#424242",
                fontWeight: "600",
                fontFamily: "Poppins, sans-serif",
                borderRadius: "10%",
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#FFFFFF",
                height: "10vh",
              },
              marginBottom: "16px",
            }}
          />
          <TextField
            label="Mensaje"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            sx={{
              "& .MuiInputLabel-root": {
                color: "#424242",
                fontWeight: "600",
                fontFamily: "Poppins, sans-serif",
                borderRadius: "10%",
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#FFFFFF",
                height: "20vh",
              },
              marginBottom: "16px",
            }}
          />

          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </Box>
      </Container>
    </div>
  );
}
