import Slides from "../../components/slides/Slides";
import ContainerKnowUs from "./ContainerKnowUs";
import ContainerCompanies from "./ContainerCompanies";
import ContainerCallProccess from "./ContainerCallProccess";
import ContainerTeam from "./ContainerTeam";

const LandingPage = () => {
  return (
    <div id="top">
      <Slides />
      <ContainerKnowUs />
      <ContainerTeam />
      <ContainerCompanies />
      <ContainerCallProccess />
      <div class="h-[100px]"></div>
    </div>
  );
};

export default LandingPage;
