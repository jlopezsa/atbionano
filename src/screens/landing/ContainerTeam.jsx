import { Typography } from "@material-tailwind/react";
import UserTeam from "../../components/cards/userTeam/UserTeam";
import { UsersTeamInfo } from "../../configs/usersTeamInfo";

const ContainerTeam = () => {
  return (
    <div class="js-show-on-scroll">
      <Typography variant="h3" className="mt-[80px] text-center">
        Equipo de trabajo
      </Typography>
      <div class="flex flex-row justify-around flex-wrap relative">
        <UserTeam props={UsersTeamInfo.user1} />
        <UserTeam props={UsersTeamInfo.user2} />
        <UserTeam props={UsersTeamInfo.user3} />
      </div>
    </div>
  );
};

export default ContainerTeam;
