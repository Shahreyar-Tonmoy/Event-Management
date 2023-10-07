import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Header/NavBar";
import Footer from "../Router/Body/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;