import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';

import { Form, Input, Button, Typography, Spin, Alert, message } from 'antd';
import { LockOutlined, UserOutlined, LoadingOutlined } from '@ant-design/icons';
import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterRequest } from '../../context/AuthProvider/util';

export function CadastroForms() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Initialize error message state

  const navigate = useNavigate();
  const [loding, setLoding] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

async function onFinish() {
    try {
        setLoding(true);
        await RegisterRequest(formData);
        navigate("/login");
        message.success('Cadastro bem-sucedido!'); // Exibir mensagem de sucesso
    } catch (error) {
        setLoding(false);
        setErrorMessage('Erro no cadastro. Por favor, verifique seus dados!');
        console.error(error);
    }
}

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
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        layout="vertical"
      >
        <Form.Item
          name="nome"
          rules={[
            {
              required: true,
              message: 'Por favor, inserir seu nome!',
            },
          ]}
        >
          <Input placeholder="Nome completo" className='input' name="nome" value="nome" onChange={handleChange} />
        </Form.Item>

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
          <Input placeholder="Email" className='input' name="email" value="email" onChange={handleChange} />
        </Form.Item>

        <Form.Item
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Por favor, inserir uma senha!',
            },
            {
              min: 3,
              message: 'A senha deve conter no mínimo 3 caracteres!',
            }
          ]}
        >
          <Input.Password
            type="password"
            placeholder="Senha"
            className='input'
            name="password"
            value="password"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Confirme sua senha!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Por favor, verifique novamente. As senhas digitadas não coincidem!'));
              },
            }),
          ]}
        >
          <Input.Password
            type="password"
            placeholder="Confirme sua senha"
            className='input'
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" className='button mb-3' style={{ fontSize: '16px' }}>
          {loding ? <Spin indicator={antIcon} /> : 'Cadastrar'}
        </Button>
      </Form>
    </>
    );
}