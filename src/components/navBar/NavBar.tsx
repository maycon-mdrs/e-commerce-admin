import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import '../style.css';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import Logo from '../../images/logo.png';
import { useAuth } from '../../context/AuthProvider/useAuth';

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
import { Button, Menu, MenuProps, Popconfirm } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar() {
  const auth = useAuth();

  const confirmLogout = () => {
    auth.logout();
  };

  const itemsBottom: MenuProps['items'] = [
    {
      key: '1',
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
    <Navbar key={'false'} expand={'false'} className="bg-body-tertiary mb-3 ">
      <Container fluid style={{ flexWrap: 'nowrap' }}>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'false'}`} style={{ width: 'auto' }} />
        <Navbar.Brand href="#" className='title'>FRASH FAIRE</Navbar.Brand>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${'false'}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${'false'}`}
          placement="start"
        >
          <Offcanvas.Header closeButton className='align-items-start'>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'false'}`}>
              <img src={Logo} alt="Logo" style={{ height: 100 }} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className=''>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Estoque e Produtos</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
            <Menu
              mode="inline"
              className="menu"
              items={itemsBottom}
              style={{
                color: 'black',
                padding: '5px',
                bottom: '0',
                left: '0',
                width: '100%',
                zIndex: 1,
                position: 'absolute',
              }}
            />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
