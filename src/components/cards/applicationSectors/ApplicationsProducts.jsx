import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { ButtonLink } from "components/buttons/ButtonLink/ButtonLink";

export const ApplicationProducts = ({
  description,
  title,
  imagePath = "",
  credits = "",
  children,
  isReadMoreOption = false
}) => {
  return (
    <Card className="mt-6 w-96 m-10 hover:shadow-[6px_7px_20px_1px_rgba(115,115,115,1)] ease-in duration-200">
      {imagePath.length > 0 ? (
        <CardHeader color="black" className="relative h-56">
          <img src={imagePath} alt="card-with-some-visual-description" />
        </CardHeader>
      ) : (
        <CardHeader color="black" className="relative h-56">
          <div>{children}</div>
        </CardHeader>
      )}

      <Typography variant="small">{credits}</Typography>
      <CardBody className="max-h-40 min-h-40 h-40">
        <Typography variant="h5" color="black" className="mb-2">
          {title}
        </Typography>
        <Typography color="black">{description}</Typography>
      </CardBody>
      <CardFooter className="p-4 bottom-0">
      {/* {isReadMoreOption && <a className="m-0 p-0" href="https://elpalmicultor.com/biomasa-palma-reducir-crecimiento-microorganismos/">Conoce mas </a>} */}
      {isReadMoreOption && <ButtonLink message={"Conoce más"} urlLink={"https://elpalmicultor.com/biomasa-palma-reducir-crecimiento-microorganismos/"}/>}
      </CardFooter>
    </Card>
  );
};
