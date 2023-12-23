import { Alert, Button, Form, Input, Spin } from "antd";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined, LoadingOutlined } from '@ant-design/icons';
import { useAuth } from "../../context/AuthProvider/useAuth";
import 'bootstrap/dist/css/bootstrap.css'

export function ConfigFormsConta() {
    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Initialize error message state

    const auth = useAuth();
    const navigate = useNavigate();
    const [loding, setLoding] = useState(false);
    const [formData, setFormData] = useState({
        name: auth.name,
        email: auth.email,
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    async function onFinish() {

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
                initialValues={formData}
            >
                <Form.Item
                    name="name"
                    label="Nome completo"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, inserir seu nome!',
                        },
                    ]}
                >
                    <Input placeholder="Nome completo" className='input' name="name" value="name" onChange={handleChange} />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
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
                    <Input placeholder="exemplo@gmail.com" className='input' name="email" value="email" onChange={handleChange} />
                </Form.Item>

                <Form.Item
                    name="phone_number"
                    label="Número do celular"
                    validateTrigger="onBlur"
                >
                    <Input placeholder="(99) 98877-6655" className='input' name="phone_number" value="phone_number" onChange={handleChange} />
                </Form.Item>

                <div className='d-flex align-items-center justify-content-center' style={{maxWidth: '100%'}}>
                    <Button type="primary" htmlType="submit" className='button mb-4'>
                        {loding ? <Spin indicator={antIcon} /> : 'Salvar'}
                    </Button>
                </div>
            </Form>
        </>
    );
}