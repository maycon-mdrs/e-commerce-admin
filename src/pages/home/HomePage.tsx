import { MainHome } from "../../components/mainHome/MainHome";
import { SideBar } from "../../components/sideBar/SideBar";
import { Layout } from 'antd';

export function HomePage() {
    return (
        <Layout hasSider>
            {/* SideBar */}
            <SideBar />

            {/* Main - container */}
            <Layout className="site-layout" style={{ marginLeft: 250 }}>
                <MainHome />
            </Layout>
        </Layout >
    );
}