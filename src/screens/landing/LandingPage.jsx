import Slides from "components/slides/Slides"
import ContainerKnowUs from "./ContainerKnowUs"
import ContainerCompanies from "./ContainerCompanies"
import ContainerCallProccess from "./ContainerCallProccess"
import ContainerTeam from "./ContainerTeam"
import VideoPresentation from "./components/VideoPresentation"
import { ContainerHistoryLine } from "./ContainerHistoryLine"

const LandingPage = () => {
  return (
    <div id="top">
      <Slides />
      <ContainerKnowUs />
      <VideoPresentation />
      <ContainerTeam />
      <ContainerCompanies />
      <ContainerCallProccess />
      <ContainerHistoryLine />
      <div class="h-[100px]"></div>
    </div>
  )
}

export default LandingPage
