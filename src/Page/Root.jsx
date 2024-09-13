import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import ScrollToTop from "../Component/ScrollToTop";

const Root = () => {

    const location = useLocation()
    const isLogin = location.pathname.includes('login') || location.pathname.includes('register') 
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            {isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}

        </div>
    );
};

export default Root;