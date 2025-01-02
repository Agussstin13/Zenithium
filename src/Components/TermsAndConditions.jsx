import React, { useState } from "react";
import { Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import {EMAIL} from "../Config.js";

const TermsAndConditions = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
      <Button sx={{fontSize: "0.6rem"}} variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Ver Terminos y condiciones
      </Button>
      <Dialog open={open} maxWidth="md" fullWidth>
      <DialogTitle>Términos y Condiciones</DialogTitle>
      <DialogContent>
        <Typography variant="h4" gutterBottom>
          © 2025 Zenithium. Todos los derechos reservados.
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" paragraph>
            Bienvenido/a a Zenithium. Estos Términos y Condiciones rigen el uso
            de nuestro sitio web y la contratación de nuestros servicios. Al
            acceder y utilizar este sitio, aceptas estar sujeto/a a los
            siguientes términos. Si no estás de acuerdo con ellos, te pedimos
            que no utilices nuestro sitio.
          </Typography>

          <Typography variant="h6" gutterBottom>
            1. Información de la Empresa
          </Typography>
          <Typography variant="body1" paragraph>
            <ul>
              <li>Razón Social: Zenithium</li>
              <li>Domicilio: Mar del Plata, Buenos Aires, Argentina.</li>
              <li>Actividad: Venta y desarrollo de software.</li>
            </ul>
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. Acceso al Sitio Web
          </Typography>
          <Typography variant="body1" paragraph>
            El acceso al sitio web de Zenithium está disponible para cualquier
            usuario sin restricción de edad. Sin embargo, la venta de software
            está dirigida exclusivamente a personas mayores de 18 años. Al
            contratar nuestros servicios, confirmas que cumples con este
            requisito.
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Servicios Ofrecidos
          </Typography>
          <Typography variant="body1" paragraph>
            Zenithium ofrece software orientado a mejorar las actividades
            laborales o comerciales de sus clientes. La contratación de nuestros
            servicios estará regulada mediante un contrato independiente que
            deberá ser firmado por ambas partes.
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Propiedad Intelectual
          </Typography>
          <Typography variant="body1" paragraph>
            Todo el contenido presente en este sitio web, incluidos textos,
            gráficos, logotipos, imágenes, videos, y código fuente, es propiedad
            exclusiva de Zenithium o de terceros que han autorizado su uso. Está
            estrictamente prohibido copiar, modificar, reproducir, distribuir,
            transmitir o explotar el contenido del sitio sin autorización previa
            por escrito de Zenithium.
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. Uso Permitido del Sitio
          </Typography>
          <Typography variant="body1" paragraph>
            El usuario se compromete a:
            <ul>
              <li>
                No realizar actividades que puedan dañar, desactivar o
                sobrecargar el sitio.
              </li>
              <li>
                No intentar acceder de manera no autorizada a sistemas o redes
                conectados al sitio.
              </li>
              <li>
                Utilizar el sitio exclusivamente para los fines permitidos.
              </li>
            </ul>
          </Typography>

          <Typography variant="h6" gutterBottom>
            6. Datos Personales y Privacidad
          </Typography>
          <Typography variant="body1" paragraph>
            Zenithium no recopila ni almacena información personal de los
            usuarios a través de su sitio web. Sin embargo, la página de
            contacto permite al usuario llenar un formulario de comentarios que,
            al enviarse, redirige al cliente a su propio correo electrónico para
            remitirnos el mensaje directamente.
          </Typography>

          <Typography variant="h6" gutterBottom>
            7. Limitación de Responsabilidad
          </Typography>
          <Typography variant="body1" paragraph>
            Zenithium no se hace responsable por:
            <ul>
              <li>
                Daños o perjuicios derivados del uso del sitio web o la
                imposibilidad de acceder al mismo.
              </li>
              <li>Errores en la información proporcionada en el sitio web.</li>
              <li>
                Interrupciones temporales del servicio debido a tareas de
                mantenimiento, fallas técnicas u otras razones.
              </li>
            </ul>
          </Typography>

          <Typography variant="h6" gutterBottom>
            8. Jurisdicción y Ley Aplicable
          </Typography>
          <Typography variant="body1" paragraph>
            Estos Términos y Condiciones se rigen por las leyes de la República
            Argentina. Cualquier controversia que surja en relación con el uso
            del sitio web será resuelta ante los tribunales competentes de la
            ciudad de Mar del Plata, Buenos Aires, Argentina.
          </Typography>

          <Typography variant="h6" gutterBottom>
            9. Modificaciones de los Términos y Condiciones
          </Typography>
          <Typography variant="body1" paragraph>
            Zenithium se reserva el derecho de modificar estos Términos y
            Condiciones en cualquier momento. Las modificaciones entrarán en
            vigor una vez publicadas en este sitio web. Es responsabilidad del
            usuario revisar periódicamente los Términos y Condiciones para estar
            informado de los cambios.
          </Typography>

          <Typography variant="h6" gutterBottom>
            10. Contacto
          </Typography>
          <Typography variant="body1" paragraph>
            Para cualquier consulta o comentario relacionado con estos Términos
            y Condiciones, puedes contactarnos a través de la página de contacto
            o al siguiente correo electrónico: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </Typography>
        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TermsAndConditions;
