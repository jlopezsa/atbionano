import { Fade } from "react-awesome-reveal";
import CallsProcesses from "components/cards/callsProcesses/CallsProcesses";
import { CallsMessages } from "configs/callsMessages";
import { ROUTE_SECTION_PROCESS } from "routes/routes";
import { Typography } from "@material-tailwind/react";

const ContainerCallProccess = () => {
  return (
    <div id={ROUTE_SECTION_PROCESS}>
      <Typography variant="h3" className="text-center pt-[80px]">
        Nuestro proceso
      </Typography>
      <div class="flex flex-row justify-around flex-wrap relative -z-10">
        <Fade cascade triggerOnce damping={0.5}>
          <CallsProcesses props={CallsMessages.call1} />
          <CallsProcesses props={CallsMessages.call2} />
          <CallsProcesses props={CallsMessages.call3} />
        </Fade>
      </div>
    </div>
  );
};

export default ContainerCallProccess;
