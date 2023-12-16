import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';

import { Form, Input, Button, Typography, Alert, message, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { useState } from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

export function LoginForms () {
    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white'}} spin />;

    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Initialize error message state
    const [loding, setLoding] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate(); // Get navigate object from React Router
    
    /**
     * Manipula o envio do formulário após a validação bem-sucedida.
     *
     * @param {Object} values - Um objeto contendo os valores de email e senha.
     * @param {string} values.email - O endereço de email fornecido no formulário.
     * @param {string} values.password - A senha fornecida no formulário.
     * @returns {void}
     */
    async function onFinish(values: {email: string, password: string}) {        
        try {
            setLoding(true);
            await auth.authenticate(values.email, values.password);
            console.log('values.email: ', values.email, ' values.password ' , values.password);
            
            navigate("/home");
            message.success('Login bem-sucedido!'); // Exibir mensagem de sucesso
            //<Navigate to="/questionarios" />
            console.log('entrou')
        } catch (error) {
            setLoding(false);
            setErrorMessage(
                    'E-mail ou senha incorretos. Por favor, verifique suas credenciais de acesso!'
                );
            console.log(error);
        }  
    }

    /**
     * Manipula a falha no envio do formulário.
     *
     * @param {Object} errorInfo - Informações sobre o erro no envio do formulário.
     * @param {Object} errorInfo.values - Os valores dos campos do formulário no momento do envio.
     * @param {Object} errorInfo.errorFields - Um array de campos com erro e mensagens de erro relacionadas.
     * @param {Array} errorInfo.outOfDate - Um array de campos desatualizados.
     * @returns {void}
     */
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {/* Error de Acesso */}
            {errorMessage && (
                <Alert
                    message={errorMessage}
                    type="error"
                    showIcon
                    style={{ marginBottom: '1rem' }}
                />
            )}
            
            <Form 
                name='forms-login'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}    
            >
            <Form.Item 
                name="email" 
                rules={[
                    {   
                        type: 'email',
                        message: 'Por favor, inserir um e-mail válido!'
                    },
                    { 
                        required: true, 
                        message: 'Por favor, inserir seu e-mail!' 
                    }
                ]}
                validateTrigger="onBlur" 
            >
            <Input placeholder='Email' className='input'/>
            </Form.Item>

            <Form.Item 
                name="password" style={{marginBottom:'10px'}}
                rules={[{ required: true, message: 'Por favor, inserir sua senha!' }]}
            >
                <Input.Password placeholder='Senha' className='input'/>
            </Form.Item>

            {/* Esqueci minha senha */}
            <div className='mb-4' style={{float: 'right'}}>
                <a className='a-senha'>Esqueci minha senha!</a>
            </div>
            <Button type='primary' htmlType='submit' className='button mb-3' style={{fontSize: '18px'}}>
                {loding ? <Spin indicator={antIcon} /> : 'Entrar'} 
            </Button>
            </Form>{}
        </>
    );
}
