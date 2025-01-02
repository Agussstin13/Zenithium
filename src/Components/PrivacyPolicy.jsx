import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import {EMAIL} from "../Config.js";

export default function PrivacyPolicy(){
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button sx={{fontSize: "0.6rem"}} variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Ver Política de Privacidad
      </Button>
      <Dialog open={open} maxWidth="md" fullWidth>
        <DialogTitle>Política de Privacidad</DialogTitle>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            1. Información que recopilamos
          </Typography>
          <Typography paragraph>
            Solo recopilamos información personal cuando los usuarios nos envían correos electrónicos a través de nuestro formulario de contacto o directamente a nuestra dirección de correo electrónico. Los datos que recopilamos son únicamente los correos electrónicos que nos envían las personas interesadas en ponernos en contacto.
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. Uso de la información
          </Typography>
          <Typography paragraph>
            Los correos electrónicos que recibimos son utilizados exclusivamente para responder a consultas o solicitudes de información. No utilizamos esta información con fines comerciales, publicitarios ni de marketing, ni la compartimos con terceros.
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Almacenamiento de la información
          </Typography>
          <Typography paragraph>
            Los correos electrónicos que recibimos son almacenados de manera segura para poder responder de manera efectiva a las solicitudes de los usuarios. No compartimos ni vendemos estos datos a terceros bajo ninguna circunstancia.
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Seguridad
          </Typography>
          <Typography paragraph>
            Tomamos medidas razonables para proteger la información personal que recopilamos y almacenamos. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es completamente seguro. Aunque nos esforzamos por proteger tu información, no podemos garantizar su seguridad al 100%.
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. No recopilamos datos sensibles
          </Typography>
          <Typography paragraph>
            No recopilamos ni procesamos información sensible, como datos bancarios, números de identificación personal, ni información relacionada con la salud o la orientación sexual.
          </Typography>

          <Typography variant="h6" gutterBottom>
            6. Cambios en esta política
          </Typography>
          <Typography paragraph>
            Nos reservamos el derecho de actualizar o modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.
          </Typography>

          <Typography variant="h6" gutterBottom>
            7. Contacto
          </Typography>
          <Typography paragraph>
            Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos tus datos, no dudes en ponerte en contacto con nosotros
            a través del siguiente correo electrónico: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}