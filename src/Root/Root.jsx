import { Outlet } from "react-router-dom";
import Header from "../Componrntes/Header/Header";


const Root = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;