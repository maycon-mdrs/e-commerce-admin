import { Alert, Button, Form, Input, Spin } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined, LoadingOutlined } from '@ant-design/icons';
import { useAuth } from "../../../context/AuthProvider/useAuth";
import 'bootstrap/dist/css/bootstrap.css'
import TextArea from "antd/es/input/TextArea";

export function ModalItemForms({ onFormDataChange }: any) {
    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Initialize error message state

    const auth = useAuth();
    const navigate = useNavigate();
    const [loding, setLoding] = useState(false);

    /* const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    }; */

    const handleChange = (e:  ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        onFormDataChange((prevFormData:any) => ({
          ...prevFormData,
          [name]: value
        }));
      };

    const [form] = Form.useForm();

    useEffect(() => {
        form.validateFields().then(values => {
            onFormDataChange(values); // Passando os dados do formulário para o componente pai
        });
    }, [form]);

    return (
        <>
            <Form.Item
                name="title"
                label="Título"
                rules={[
                    {
                        required: true,
                        message: 'Por favor, inserir título!',
                    },
                ]}
            >
                <Input placeholder="Título do produto" className='input' name="title" onChange={handleChange} />
            </Form.Item>

            <Form.Item
                name="description"
                label="Descrição"
                rules={[
                    {
                        required: true,
                        message: 'Por favor, inserir uma descrição!'
                    }
                ]}
            >
                <TextArea rows={3} placeholder=". . ." name="description" onChange={handleChange} />
            </Form.Item>

            <Form.Item
                name="price"
                label="Preço de venda"
                rules={[
                    {
                        required: true,
                        message: 'Por favor, inserir o preço!'
                    }
                ]}
            >
                <Input placeholder="R$00,00" className='input' name="price" onChange={handleChange} />
            </Form.Item>

            <Form.Item
                name="quantity"
                label="Estoque"
                rules={[
                    {
                        required: true,
                        message: 'Por favor, inserir a quantidade!'
                    }
                ]}
            >
                <Input placeholder="0" className='input' name="quantity" onChange={handleChange} />
            </Form.Item>
        </>
    );
}