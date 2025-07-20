import Slides from "components/slides/Slides"
import VideoPresentation from "./components/VideoPresentation"
import ContainerCallProccess from "./ContainerCallProccess"
import ContainerCollaborationEcosystem from "./ContainerCollaborationEcosystem"
import ContainerCompanies from "./ContainerCompanies"
import { ContainerHistoryLine } from "./ContainerHistoryLine"
import ContainerKnowUs from "./ContainerKnowUs"
import ContainerTeam from "./ContainerTeam"

const LandingPage = () => {
  return (
    <div id="top">
      <Slides />
      <ContainerKnowUs />
      <VideoPresentation />
      <ContainerTeam />
      <ContainerCompanies />
      <ContainerCollaborationEcosystem />
      <ContainerCallProccess />
      <ContainerHistoryLine />
      <div class="h-[100px]"></div>
    </div>
  )
}

export default LandingPage
