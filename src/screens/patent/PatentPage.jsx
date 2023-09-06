import { Typography } from "@material-tailwind/react";
import imagePatent from "../../images/patent/skye-studios-NDLLFxTELrU-patent.jpeg";
import bionanoaxusLabelImage from "../../images/atbionano/bionanoaxus-label.jpeg";

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

      <div style={{ textAlign: "center" }} class="mt-10 mb-10">
        <Typography variant="h2">Nanotecnología</Typography>
      </div>

      <section class="mx-auto max-w-screen-xl flex flex-col sm:flex-row  items-center justify-center">
        <div class="w-3/4 sm:w-1/2 text-center px-5 py-5">
          <Typography variant="h3" class="color text-base">
            Tecnología TRL 6
          </Typography>
          <Typography variant="lead" class="">
            Validación de componentes en laboratorio y entornos relevantes,
            pruebas invitro
          </Typography>
        </div>
        <div class="w-3/4 sm:w-1/2 text-center px-5 py-5">
          <Typography variant="h3">Patente de invención en Colombia</Typography>
          <Typography variant="lead" class="">
            Patente de invención No. NC2022/0007166 Producto diseñado,
            manufacturado y de venta en Colombia.
          </Typography>
        </div>
      </section>

      <div style={{ textAlign: "center" }} class="mt-10 mb-10">
        <Typography variant="h2">Características</Typography>
      </div>

      <section class="mx-auto max-w-screen-xl flex flex-col items-center justify-center">
        <div class="w-3/4 sm:w-1/2">
          <img
            class="h-full w-full rounded-xl shadow-lg"
            src={bionanoaxusLabelImage}
            alt="logo"
          />
        </div>
        <div class="w-3/4  sm:w-1/2 mt-5">
          <Typography variant="lead" class="mx-10">
            Solución acuosa que sirve para el control de hongos y bacterias,
            presentes en cultivos de frutas y verduras como tomate, plátano,
            banano y papa que causan enfermedades en las plantas con grandes
            pérdidas económicas. Esta basada en tecnología biológica para
            obtener un producto de tipo nano que le permite una mayor eficacia
            en dosis y tiempo de acción.
          </Typography>
        </div>
        <div class="w-3/4  sm:w-1/2">
          <ul class="list-disc m-5">
            <li>
              <Typography variant="lead">
                Antimicrobiana sobre diversos microorganismos.
              </Typography>
            </li>
            <li>
              <Typography variant="lead">
                No posee elementos organoclorados, ni oxidantes, ni grupos OH
                libres a los seres vivos y el medio ambiente.
              </Typography>
            </li>
            <li>
              <Typography variant="lead">pH próximos al neutro</Typography>
            </li>
            <li>
              <Typography variant="lead">
                Rápida acción y menor dosificación
              </Typography>
            </li>
            <li>
              <Typography variant="lead">Inocuo</Typography>
            </li>
          </ul>
        </div>
      </section>

      <section class="mx-auto max-w-screen-xl"></section>
    </div>
  );
};

export default PatentPage;
