import { useState } from "react";
import { MainHome } from "../../components/mainHome/MainHome";
import { NavBar } from "../../components/navBar/NavBar";
import { SideBar } from "../../components/sideBar/SideBar";
import { Button, Layout, Menu, theme } from 'antd';
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";

import '../style.css';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

export function HomePage() {
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout className={`home-layout ${collapsed ? 'collapsed' : ''}`}>
                <MainHome collapsed={collapsed} setCollapsed={setCollapsed} />
            </Layout>
        </Layout>
    );
}