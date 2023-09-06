import { Typography } from "@material-tailwind/react";
import imagePatent from "../../images/patent/skye-studios-NDLLFxTELrU-patent.jpeg";

const PatentPage = () => {
  return (
    <div class="h-full mt-[80px]">
      <div
        class="w-full h-[400px] bg-fixed"
        style={{
          backgroundImage: `url(${imagePatent})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <Typography variant="small">
          Foto de{" "}
          <a href="https://unsplash.com/es/@skyestudios?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Skye Studios
          </a>{" "}
          en{" "}
          <a href="https://unsplash.com/es/fotos/NDLLFxTELrU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </Typography>
        <div class="w-full h-full flex justify-center items-center">
          <p class="text-5xl sm:text-7xl font-bold text-white text-center">
            Nanopartículas Inorgánicas
          </p>
        </div>
      </div>
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
