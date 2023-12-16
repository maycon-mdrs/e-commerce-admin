import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';
import '../style.css';
import Logo from '../../images/logo.png';

import { Form, Input, Button, Alert } from 'antd';
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { CadastroForms } from './CadastroForms';

export function Cadastro () {
    
    return (
        <Card style={{maxWidth: '400px', padding: '2.5rem 1rem', borderRadius: '20px', margin: '12px', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 1)'}}>
            <Card.Body>
                <Card.Title className='d-flex justify-content-center mb-3'>
                    <Image src={Logo} style={{maxWidth: '120px'}}/>
                </Card.Title>
                <Card.Title className='d-flex justify-content-center mb-1 title'>
                    CADASTRO
                </Card.Title>
                <Card.Text className="text-center px-2" style={{maxWidth: '322px'}}>
                    Faça o cadastro para acessar o sistema!
                </Card.Text>
                
                {/* FORMS */}
                <CadastroForms />

                {/* - OU - */}
                <div className='d-flex align-items-center justify-content-between mb-3'>
                    <div style={{width: '42%'}}><hr /></div>
                    <span style={{fontSize: '14px', color: '#727272'}}>OU</span>
                    <div style={{width: '42%'}}><hr /></div>
                </div>

                {/* CADASTRO */}
                <Link to={'/login'} className='a-login'>
                    <button className='button-login' style={{fontSize: '18px'}}>ENTRAR NA MINHA CONTA</button>
                </Link>
            </Card.Body>
        </Card>
        
    );
}