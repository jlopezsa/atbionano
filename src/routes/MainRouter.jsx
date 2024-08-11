import { Route, Routes } from "react-router-dom";
import CallsProcesses from "../components/cards/callsProcesses/CallsProcesses";
import ContainerKnowUs from "../screens/landing/ContainerKnowUs";
import LandingPage from "../screens/landing/LandingPage";
import ContainerCompanies from "./../screens/landing/ContainerCompanies";
import Footer from "./../components/footer/Footer";
import Header from "./../components/header/Header";

import {
  ROUTE_HOME,
  ROUTE_SECTION_CONTACT,
  ROUTE_SECTION_KNOW_US,
  ROUTE_SECTION_PARTNERS,
  ROUTE_SECTION_PROCESS,
  ROUTE_BIONANOAXUS_PRODUCT_PAGE,
  ROUTE_ZCLEAN_PRODUCT_PAGE,
  ROUTE_PATENT_PAGE,
  ROUTE_SECTION_TEAM,
} from "./routes";
import BionanoaxusProductPage from "../screens/products/bionanoaxus/BionanoaxusProductPage";
import PatentPage from "../screens/patent/PatentPage";
import ContainerTeam from "../screens/landing/ContainerTeam";
import ZcleanProductPage from "../screens/products/zclean/ZcleanProductPage";

const MainRouter = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={ROUTE_HOME} element={<LandingPage />} />
        <Route path={ROUTE_SECTION_KNOW_US} element={<ContainerKnowUs />} />
        <Route path={ROUTE_SECTION_TEAM} element={<ContainerTeam />} />
        <Route path={ROUTE_SECTION_PARTNERS} element={<ContainerCompanies />} />
        <Route path={ROUTE_SECTION_PROCESS} element={<CallsProcesses />} />
        <Route path={ROUTE_SECTION_CONTACT} element={<Footer />} />
        <Route path={ROUTE_PATENT_PAGE} element={<PatentPage />} />
        <Route
          path={ROUTE_BIONANOAXUS_PRODUCT_PAGE}
          element={<BionanoaxusProductPage />}
        />
        <Route
          path={ROUTE_ZCLEAN_PRODUCT_PAGE}
          element={<ZcleanProductPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRouter;
