import Footer from "components/footer/Footer"
import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"

export const HomePage = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
