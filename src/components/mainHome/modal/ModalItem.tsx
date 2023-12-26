import React, { useState } from 'react';
import { Modal, Upload, message, Button, Form } from 'antd';
import { LoadingOutlined, PlusOutlined, DeleteOutlined, ShoppingOutlined } from '@ant-design/icons';
import type { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { GetBase64 } from '../../upload/image/GetBase64';
import { ModalItemForms } from './ModalItemForms';
import { postProduct } from '../../../services/postProduct';

export function ModalItem({ isVisible, onShowModal }: { isVisible: boolean, onShowModal: (isVisible: boolean) => void }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: 0,
        quantity: 0
    });
    const [imageFile, setImageFile] = useState(null);

    const handleOk = async () => {
        try {
            await postProduct(formData);
            message.success('Produto salvo com sucesso!');
            onShowModal(false);
        } catch (error) {
            message.error('Erro ao salvar o produto.');
            console.error(error);
        }

    };

    const handleCancel = () => {
        onShowModal(false);
    };

    const title = (
        <span>
            <ShoppingOutlined style={{ fontSize: 20, color: '#ff4d4f' }} /> NOVO PRODUTO
        </span>
    );

    const footer = (
        <div style={{ textAlign: 'center' }}>
            <Button key="submit" type="primary" onClick={handleOk} size='large' danger>
                Salvar
            </Button>
        </div>
    );

    return (
        <Modal
            title={title}
            open={isVisible}
            onCancel={handleCancel}
            footer={''}
        >
            <Form
                onFinish={handleOk}
                name="register"
                scrollToFirstError
                layout="vertical"
            >
                <div className="row gutters mt-4">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <h6 className="mb-3 text-primary">Informações</h6>
                        <ModalItemForms onFormDataChange={setFormData} />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <h6 className="text-primary" style={{ marginBottom: 45 }}>Foto</h6>
                        <GetBase64 />
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Button className='mt-3' htmlType="submit" type="primary" size='large' danger>
                        Salvar
                    </Button>
                </div>
            </Form>
        </Modal>
    );
}
