import { MainHome } from "../../components/mainHome/MainHome";
import { NavBar } from "../../components/navBar/NavBar";
import { SideBar } from "../../components/sideBar/SideBar";
import { Layout } from 'antd';

export function HomePage() {
    return (

        <>
            <NavBar />
            <MainHome />
        </>

    );
}