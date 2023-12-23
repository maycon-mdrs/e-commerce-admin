import { Button, Flex, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Item } from "../itens/Item";
import { getProducts } from "../../services/getProducts";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { CardsInfo } from "./cards/CardsInfo";

import './style.css'

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    BarChartOutlined,
    ShopOutlined,
    InboxOutlined,
    PlusOutlined,
    ShoppingOutlined,
} from '@ant-design/icons';
import { Outlet } from "react-router-dom";

export function MainHome({ collapsed, setCollapsed  }: { collapsed: boolean, setCollapsed: (collapsed: boolean) => void }) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const auth = useAuth();

    return (
        <>
            {/* Header */}
            <Header className="shadow-sm" style={{
                padding: 0,
                background: colorBgContainer,
                display: 'flex',
                alignItems: 'center',
                position: 'fixed', zIndex: 1, width: '100%'
            }}>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
                <h4 style={{ margin: 0, marginLeft: 20 }}>Olá, {auth.name} 👋</h4>
            </Header>

            {/* Navegação */}
            <Outlet />
        </>
    );
}