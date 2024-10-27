import { Navigate, createBrowserRouter } from "react-router-dom";
import PatentPage from "screens/patent/PatentPage";
import LandingPage from "screens/landing/LandingPage";
import { HomePage } from "screens/HomePage";
import BionanoaxusProductPage from "screens/products/bionanoaxus/BionanoaxusProductPage";
import ZcleanProductPage from "screens/products/zclean/ZcleanProductPage";
import {
  ROUTE_BIONANOAXUS_PRODUCT_PAGE,
  ROUTE_HOME,
  ROUTE_PATENT_PAGE,
  ROUTE_ZCLEAN_PRODUCT_PAGE,
} from "./routes";

const routerApp = createBrowserRouter([
  {
    path: ROUTE_HOME,
    element: <HomePage />,
    errorElement: <div> La ruta no se encuentra</div>,
    children: [
      {
        path: ROUTE_HOME,
        element: <LandingPage />,
      },
      {
        path: ROUTE_PATENT_PAGE,
        element: <PatentPage />,
      },
      {
        path: ROUTE_BIONANOAXUS_PRODUCT_PAGE,
        element: <BionanoaxusProductPage />,
      },
      {
        path: ROUTE_ZCLEAN_PRODUCT_PAGE,
        element: <ZcleanProductPage />,
      },
    ],
  },
  { path: "*", element: <Navigate to={ROUTE_HOME} /> },
]);

export const RouterApp = {
  router: routerApp,
};
