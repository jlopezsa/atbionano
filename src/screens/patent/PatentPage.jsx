import { Typography } from "@material-tailwind/react";

const PatentPage = () => {
  return (
    <div class="h-full mt-[80px]">
      <Typography variant="h2">... En construcción</Typography>
      <Typography variant="h1">Nanotecnología</Typography>
      <Typography variant="h2">Tecnología TRL 6</Typography>
      <Typography variant="h6">
        Validación de componentes en laboratorio y entornos relevantes pruebas
        invitro
      </Typography>
      <Typography variant="h2">Patente de invención en Colombia</Typography>
      <Typography variant="h6">
        Patente de invención No. NC2022/0007166 Producto diseñado, manufacturado
        y de venta en Colombia.
      </Typography>

      <section>
        <Typography variant="h2">Características</Typography>
        <Typography variant="h6">
          Solución acuosa que sirve para el control de hongos y bacterias,
          presentes en cultivos de frutas y verduras como tomate, plátano,
          banano y papa que causan enfermedades en las plantas con grandes
          pérdidas económicas Esta basada en tecnología biológica para obtener
          un producto de tipo nano que le permite una mayor eficacia en dosis y
          tiempo de acción.
        </Typography>
        <ul>
          <li>Antimicrobiana sobre diversos microorganismos.</li>
          <li>
            No posee elementos organoclorados, ni oxidantes, ni grupos OH libres
            a los seres vivos y el medio ambiente.
          </li>
          <li>pH próximos al neutro</li>
          <li>Rápida acción y menor dosificación</li>
          <li>Inocuo</li>
        </ul>
      </section>
    </div>
  );
};

export default PatentPage;
