import { Alert, Button, Form, Input, Spin } from "antd";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined, LoadingOutlined } from '@ant-design/icons';
import { useAuth } from "../../context/AuthProvider/useAuth";

export function ConfigFormsSenha() {
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
                    name="atual"
                    label="Senha atual"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, inserir sua senha atual!',
                        },
                    ]}
                >
                    <Input.Password
                        type="password"
                        placeholder="Senha atual"
                        className='input'
                    />
                </Form.Item>


                <Form.Item
                    name="password"
                    hasFeedback
                    label="Nova senha"
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
                    label="Confirme sua senha"
                    rules={[
                        {
                            required: true,
                            message: 'Confirme sua nova senha!',
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
                        placeholder="Confirme sua nova senha"
                        className='input'
                    />
                </Form.Item>
                
                <div className='d-flex align-items-center justify-content-center' style={{maxWidth: '100%'}}>
                    <Button type="primary" htmlType="submit" className='button mb-4'>
                        {loding ? <Spin indicator={antIcon} /> : 'Alterar senha'}
                    </Button>
                </div>
            </Form>
        </>
    );
}