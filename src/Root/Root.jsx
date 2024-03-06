import { Outlet } from "react-router-dom";
import Header from "../Componrntes/Header/Header";
import Footer from "../Componrntes/Footer/Footer";


const Root = () => {
    return (
        <div className="mx-auto max-w-7xl space-y-10">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;