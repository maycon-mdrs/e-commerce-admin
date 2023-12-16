import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';
import '../style.css';

import Logo from '../../images/logo.png';

import { Form, Input, Button, Alert } from 'antd';
import { useAuth } from "../../context/AuthProvider/useAuth";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useState } from 'react';
import { CustomError } from './types';
import { LoginForms } from './LoginForms';

export function Login () {    

    return (
        <Card style={{maxWidth: '400px', padding: '2.5rem 1rem', borderRadius: '20px', margin: '12px', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 1)'}}>
            <Card.Body>
                <Card.Title className='d-flex justify-content-center mb-3'>
                    <Image src={Logo} style={{maxWidth: '120px'}}/>
                </Card.Title>
                <Card.Title className='d-flex justify-content-center mb-1 title'>
                    FRASH FAIRE
                </Card.Title>
                <Card.Text className="text-center px-2" style={{maxWidth: '322px'}}>
                    Cadastre-se ou faça o login para acessar o sistema!
                </Card.Text>
                
                {/* FORMS */}
                <LoginForms />
                
                {/* - OU - */}
                <div className='d-flex align-items-center justify-content-between mb-3'>
                    <div style={{width: '42%'}}><hr /></div>
                    <span style={{fontSize: '14px', color: '#727272'}}>OU</span>
                    <div style={{width: '42%'}}><hr /></div>
                </div>

                {/* CADASTRO */}
                <Link to={'/cadastro'} className='a-cadastro'>
                    <button className='button-cadastro' style={{fontSize: '16px'}}>CADASTRE-SE GRATUITAMENTE</button>
                </Link>

            </Card.Body>
        </Card>
        
    );
}
