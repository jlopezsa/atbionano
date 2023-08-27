import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const UserTeam = ({ props }) => {
  return (
    <Card className="w-80 bg-greenPastelLight mt-6">
      <CardHeader floated={false} className="h-full">
        <img src={props.figure} alt="profile" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {props.name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {props.role}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-0">
        <a href={props.linkLinkedin}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="#1166c2"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </span>
        </a>
      </CardFooter>
    </Card>
  );
};

export default UserTeam;
