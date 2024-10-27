import { Typography } from "@material-tailwind/react";
import UserTeam from "components/cards/userTeam/UserTeam";
import { UsersTeamInfo } from "configs/usersTeamInfo";
import { ROUTE_SECTION_TEAM } from "routes/routes";

const ContainerTeam = () => {
  return (
    <div id={ROUTE_SECTION_TEAM}>
      <Typography variant="h3" className="text-center pt-[80px]">
        Equipo de trabajo
      </Typography>
      <div class="flex flex-row justify-around flex-wrap">
        <UserTeam props={UsersTeamInfo.user1} />
        <UserTeam props={UsersTeamInfo.user2} />
        <UserTeam props={UsersTeamInfo.user3} />
      </div>
    </div>
  );
};

export default ContainerTeam;
