import React from 'react';
import type { MenuProps } from 'antd';
import { Avatar, Button, Layout, Menu, Popconfirm, message, theme } from 'antd';
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import Logo from '../../images/logo.png';
import { User } from './user/User';

import './style.css';

import {
    AppstoreOutlined,
    BarChartOutlined,
    UserOutlined,
    SettingOutlined,
    TeamOutlined,
    LogoutOutlined,
    HomeOutlined,
    AppstoreAddOutlined,
} from '@ant-design/icons';

export function SideBar() {
    const auth = useAuth();

    const confirmLogout = () => {
        auth.logout();        
    };

    const { Sider } = Layout;

    const itemsTop: MenuProps['items'] = [
        HomeOutlined,
        AppstoreAddOutlined,
        TeamOutlined,
    ].map((icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: ['Home', 'Questionários', 'Team'][index],
    }));

    const itemsBottom: MenuProps['items'] = [
        {
            key: '1',
            icon: React.createElement(SettingOutlined),
            label: <Link to="/configuracoes" onClick={() => { console.log('configurações') }}>Configurações</Link>,
            className: 'config-bottom'
        },
        {
            key: '2',
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
            width={250}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                backgroundColor: '#004B8D',
            }}
        >   

            {/* LOGO */}
            <div style={{ maxWidth: 'auto' }}>
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
                        backgroundColor: '#004B8D',
                        color: 'white',
                        padding: '5px',
                    }}
                />

                {/* Menu - BOTTOM */}
                <div>
                    <Menu
                        mode="inline"
                        className="menu"
                        items={itemsBottom}
                        style={{
                            backgroundColor: '#004B8D',
                            color: 'white',
                            padding: '5px',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            zIndex: 1,
                        }}
                    />

                    {/* USER */}
                    <User />
                </div>
            </div>
        </Sider>
    );
}

function navegate(arg0: string) {
    throw new Error('Function not implemented.');
}