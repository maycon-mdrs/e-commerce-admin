import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Avatar, Button, Layout, Menu, Popconfirm, message, theme } from 'antd';
import { Link, To, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import Logo from '../../images/logo.png';
import { User } from './user/User';

import './style.css';

import {
    SettingOutlined,
    LogoutOutlined,
    HomeOutlined,
    AppstoreAddOutlined,
} from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';

export function SideBar({ collapsed, setCollapsed }: { collapsed: boolean, setCollapsed: (collapsed: boolean) => void }) {
    const auth = useAuth();
    const navigate = useNavigate();

    const confirmLogout = () => {
        auth.logout();
    };

    const [selectedKey, setSelectedKey] = useState('');

    const onMenuItemClick = (key: any) => {
        if (key !== 'logout') {
            setSelectedKey(key);
            navigate(key);
        }
    };

    const itemsTop: MenuProps['items'] = [
        {
            key: 'home',
            icon: React.createElement(HomeOutlined),
            label: 'Home',
            className: 'home-top',
        },
        {
            key: 'estoque',
            icon: React.createElement(AppstoreAddOutlined),
            label: 'Estoque e Produtos',
            className: 'estoque-top',
        },
    ]

    const itemsBottom: MenuProps['items'] = [
        {
            key: 'config',
            icon: React.createElement(SettingOutlined),
            label: 'Configurações',
            className: 'config-bottom'
        },
        {
            key: 'logout',
            icon: React.createElement(LogoutOutlined),
            label:
                <Popconfirm
                    placement="topLeft"
                    title={`Deseja realmente sair?`}
                    description="Ao sair, você será redirecionado para a página de login."
                    onConfirm={confirmLogout}
                    okText="Sair"
                    cancelText="Cancelar"
                >
                    <a>Sair</a>
                </Popconfirm>,
            className: 'logout-bottom',
        },
    ];

    return (
        <Sider
            trigger={null}
            collapsible collapsed={collapsed}
            width={250}
            style={{
                overflow: 'auto',
                height: '100vh',
                backgroundColor: '#23303d',
                position: 'fixed', left: 0
            }}
        >

            {/* LOGO */}
            <div style={{ maxWidth: 'auto' }} className='d-flex justify-content-center'>
                <img src={Logo} alt="logo" style={{ width: '100%', padding: '20px' }} />
            </div>

            {/* MENUS */}
            <div style={{
                height: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
            >
                {/* Menu - TOP */}
                <Menu mode="inline"
                    className="menu"
                    items={itemsTop}
                    style={{
                        backgroundColor: '#23303d',
                        color: 'white',
                        padding: '5px',
                    }}
                    selectedKeys={[selectedKey]}
                    onClick={({ key }) => onMenuItemClick(key)}
                />

                {/* Menu - BOTTOM */}
                <div>
                    <Menu
                        mode="inline"
                        className="menu"
                        items={itemsBottom}
                        style={{
                            backgroundColor: '#23303d',
                            color: 'white',
                            padding: '5px',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            zIndex: 1,
                        }}
                        selectedKeys={[selectedKey]}
                        onClick={({ key }) => onMenuItemClick(key)}
                    />

                    {/* USER */}
                    {collapsed ? null : <User />}
                </div>
            </div>
        </Sider>
    );
}
